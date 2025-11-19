import { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { useVoiceover } from '../../utils/useVoiceover';
import { Paintbrush, Eraser, RotateCcw, Download, Check, Undo, Redo, GripVertical } from 'lucide-react';
import svgPaths from "../../imports/svg-5ermehcl92";
import imgVector from "figma:asset/b518399ed47884f4b4f9254a9986eb2916ba73fa.png";
import imgHeaderColorMe1 from "figma:asset/12250fa234e313ca6b0482e9ff0cbea361eda008.png";
import imgImage27 from "figma:asset/fea052f26c11aeec3b284255c89c87d1ec54a8ed.png";

const colorPalette = [
  { name: 'Red', color: '#FF0000' },
  { name: 'Orange', color: '#FF6B00' },
  { name: 'Yellow', color: '#FFFF00' },
  { name: 'Green', color: '#00FF00' },
  { name: 'Blue', color: '#0000FF' },
  { name: 'Purple', color: '#A020F0' },
  { name: 'Pink', color: '#FF69B4' },
  { name: 'Brown', color: '#8B4513' },
  { name: 'Black', color: '#000000' },
  { name: 'Gray', color: '#808080' },
  { name: 'Light Blue', color: '#ADD8E6' },
  { name: 'Light Green', color: '#90EE90' },
  { name: 'Peach', color: '#FFDAB9' },
  { name: 'Tan', color: '#D2B48C' },
];

const CANVAS_STORAGE_KEY = 'page7-coloring-canvas';
const MAX_HISTORY = 10;

function Art({ baseCanvasRef, drawingCanvasRef, isDrawing, startDrawing, stopDrawing, draw }: {
  baseCanvasRef: React.RefObject<HTMLCanvasElement>;
  drawingCanvasRef: React.RefObject<HTMLCanvasElement>;
  isDrawing: boolean;
  startDrawing: (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => void;
  stopDrawing: () => void;
  draw: (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => void;
}) {
  return (
    <div className="absolute h-[2067px] left-[-139px] top-[265px] w-[1676px]" data-name="Art">
      <div className="absolute bottom-0 left-[2.15%] right-[-2.15%] top-0" data-name="Vector">
        {/* Base layer - coloring page (non-interactive) */}
        <canvas
          ref={baseCanvasRef}
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{ imageRendering: 'crisp-edges' }}
        />
        {/* Drawing layer - user's brush strokes (interactive) */}
        <canvas
          ref={drawingCanvasRef}
          onMouseDown={startDrawing}
          onMouseUp={stopDrawing}
          onMouseMove={draw}
          onMouseLeave={stopDrawing}
          onTouchStart={startDrawing}
          onTouchEnd={stopDrawing}
          onTouchMove={draw}
          className="absolute inset-0 w-full h-full cursor-crosshair touch-none"
          style={{ imageRendering: 'crisp-edges' }}
        />
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[10px] items-start left-[13px] p-[20px] top-[18px] w-[1416px]">
      <div className="aspect-[1396/295] relative shrink-0 w-full" data-name="Header Color Me 1">
        <img alt="Color Me - Jesus heals the crippled woman" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgHeaderColorMe1} />
      </div>
    </div>
  );
}

function ColorMe({ baseCanvasRef, drawingCanvasRef, isDrawing, startDrawing, stopDrawing, draw }: {
  baseCanvasRef: React.RefObject<HTMLCanvasElement>;
  drawingCanvasRef: React.RefObject<HTMLCanvasElement>;
  isDrawing: boolean;
  startDrawing: (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => void;
  stopDrawing: () => void;
  draw: (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => void;
}) {
  return (
    <div className="absolute h-[2177px] left-[150px] top-[148px] w-[1419px]" data-name="Color Me">
      <Art 
        baseCanvasRef={baseCanvasRef}
        drawingCanvasRef={drawingCanvasRef}
        isDrawing={isDrawing}
        startDrawing={startDrawing}
        stopDrawing={stopDrawing}
        draw={draw}
      />
      <Frame />
    </div>
  );
}

function Pagination() {
  return (
    <div className="absolute h-[42px] left-[calc(50%-0.087px)] top-[2385px] translate-x-[-50%] w-[43.826px]" data-name="Pagination">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 42">
        <g id="Pagination">
          <rect fill="var(--fill-0, #FF0000)" height="42" rx="21" width="43.8261" />
          <g id="07">
            <path d={svgPaths.p11048300} fill="var(--fill-0, white)" />
            <path d={svgPaths.pe676d00} fill="var(--fill-0, white)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

export default function Page7() {
  const baseCanvasRef = useRef<HTMLCanvasElement>(null); // For base coloring image
  const drawingCanvasRef = useRef<HTMLCanvasElement>(null); // For user's brush strokes

  const voiceoverContent = `Let's color your artwork. Use the brush tool to paint on the artwork. You can use the eraser tool, to clean up errors.
After you're done painting, click on the "Save" button to save your artwork to your device.`;

  useVoiceover({
    content: voiceoverContent,
    voiceGender: 'female',
    autoplay: true,
    delay: 1500
  });
  const [selectedColor, setSelectedColor] = useState('#FF0000');
  const [brushSize, setBrushSize] = useState(20);
  const [isDrawing, setIsDrawing] = useState(false);
  const [tool, setTool] = useState<'brush' | 'eraser'>('brush');
  const [imageLoaded, setImageLoaded] = useState(false);
  const originalImageRef = useRef<HTMLImageElement | null>(null);
  
  // Undo/Redo state
  const [history, setHistory] = useState<string[]>([]);
  const [historyStep, setHistoryStep] = useState(-1);
  const isRestoringRef = useRef(false);

  // Load the coloring image and restore saved work
  useEffect(() => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = imgVector;
    img.onload = () => {
      originalImageRef.current = img;
      setImageLoaded(true);
      
      // Always initialize the base canvas with the artwork
      const baseCanvas = baseCanvasRef.current;
      const drawingCanvas = drawingCanvasRef.current;
      if (baseCanvas && drawingCanvas) {
        const baseCtx = baseCanvas.getContext('2d');
        const drawingCtx = drawingCanvas.getContext('2d');
        
        if (baseCtx && drawingCtx) {
          // Set canvas sizes
          baseCanvas.width = 1676;
          baseCanvas.height = 2067;
          drawingCanvas.width = 1676;
          drawingCanvas.height = 2067;
          
          // Draw the artwork on the base layer
          baseCtx.drawImage(img, 0, 0, baseCanvas.width, baseCanvas.height);
          
          // Try to restore saved drawing strokes
          const savedCanvas = localStorage.getItem(CANVAS_STORAGE_KEY);
          if (savedCanvas) {
            const drawingImg = new Image();
            drawingImg.onload = () => {
              drawingCtx.drawImage(drawingImg, 0, 0);
              saveToHistory();
            };
            drawingImg.src = savedCanvas;
          } else {
            // Clear drawing layer and save initial state
            drawingCtx.clearRect(0, 0, drawingCanvas.width, drawingCanvas.height);
            saveToHistory();
          }
        }
      }
    };
  }, []);

  // Save canvas when component unmounts (user leaves page)
  useEffect(() => {
    return () => {
      saveCanvasToStorage();
    };
  }, []);

  const drawImageToCanvas = (img: HTMLImageElement) => {
    const baseCanvas = baseCanvasRef.current;
    const drawingCanvas = drawingCanvasRef.current;
    if (!baseCanvas || !drawingCanvas) return;

    const baseCtx = baseCanvas.getContext('2d');
    const drawingCtx = drawingCanvas.getContext('2d');
    if (!baseCtx || !drawingCtx) return;

    // Set canvas sizes to match the artwork dimensions
    baseCanvas.width = 1676;
    baseCanvas.height = 2067;
    drawingCanvas.width = 1676;
    drawingCanvas.height = 2067;

    // Draw the original coloring image on the base layer
    baseCtx.drawImage(img, 0, 0, baseCanvas.width, baseCanvas.height);
    
    // Clear the drawing layer (transparent)
    drawingCtx.clearRect(0, 0, drawingCanvas.width, drawingCanvas.height);
    
    // Save initial state to history
    saveToHistory();
  };

  const saveCanvasToStorage = () => {
    const drawingCanvas = drawingCanvasRef.current;
    if (!drawingCanvas) return;
    
    try {
      // Only save the drawing layer (brush strokes)
      const dataURL = drawingCanvas.toDataURL();
      localStorage.setItem(CANVAS_STORAGE_KEY, dataURL);
    } catch (error) {
      console.error('Error saving canvas:', error);
    }
  };

  const restoreCanvasFromData = (dataURL: string) => {
    const drawingCanvas = drawingCanvasRef.current;
    if (!drawingCanvas) return;

    const drawingCtx = drawingCanvas.getContext('2d');
    if (!drawingCtx) return;

    drawingCanvas.width = 1676;
    drawingCanvas.height = 2067;

    const img = new Image();
    img.onload = () => {
      // Restore only the drawing layer (brush strokes)
      drawingCtx.drawImage(img, 0, 0);
      saveToHistory();
    };
    img.src = dataURL;
  };

  const saveToHistory = () => {
    if (isRestoringRef.current) return;
    
    const drawingCanvas = drawingCanvasRef.current;
    if (!drawingCanvas) return;

    // Save only the drawing layer (brush strokes)
    const dataURL = drawingCanvas.toDataURL();
    
    setHistory(prev => {
      const newHistory = prev.slice(0, historyStep + 1);
      newHistory.push(dataURL);
      
      // Keep only last MAX_HISTORY states
      if (newHistory.length > MAX_HISTORY) {
        return newHistory.slice(newHistory.length - MAX_HISTORY);
      }
      return newHistory;
    });
    
    setHistoryStep(prev => {
      const newStep = prev + 1;
      return newStep >= MAX_HISTORY ? MAX_HISTORY - 1 : newStep;
    });
  };

  const undo = () => {
    if (historyStep > 0) {
      const newStep = historyStep - 1;
      setHistoryStep(newStep);
      restoreFromHistory(history[newStep]);
    }
  };

  const redo = () => {
    if (historyStep < history.length - 1) {
      const newStep = historyStep + 1;
      setHistoryStep(newStep);
      restoreFromHistory(history[newStep]);
    }
  };

  const restoreFromHistory = (dataURL: string) => {
    isRestoringRef.current = true;
    const drawingCanvas = drawingCanvasRef.current;
    if (!drawingCanvas) return;

    const drawingCtx = drawingCanvas.getContext('2d');
    if (!drawingCtx) return;

    const img = new Image();
    img.onload = () => {
      // Clear and restore only the drawing layer
      drawingCtx.clearRect(0, 0, drawingCanvas.width, drawingCanvas.height);
      drawingCtx.drawImage(img, 0, 0);
      isRestoringRef.current = false;
    };
    img.src = dataURL;
  };

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    setIsDrawing(true);
    draw(e);
  };

  const stopDrawing = () => {
    if (isDrawing) {
      setIsDrawing(false);
      const drawingCanvas = drawingCanvasRef.current;
      if (drawingCanvas) {
        const drawingCtx = drawingCanvas.getContext('2d');
        if (drawingCtx) {
          drawingCtx.beginPath();
        }
        // Save to history after drawing stroke
        saveToHistory();
        // Auto-save to storage
        saveCanvasToStorage();
      }
    }
  };

  const getCoordinates = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    const drawingCanvas = drawingCanvasRef.current;
    if (!drawingCanvas) return { x: 0, y: 0 };

    const rect = drawingCanvas.getBoundingClientRect();
    const scaleX = drawingCanvas.width / rect.width;
    const scaleY = drawingCanvas.height / rect.height;

    if ('touches' in e) {
      const touch = e.touches[0];
      return {
        x: (touch.clientX - rect.left) * scaleX,
        y: (touch.clientY - rect.top) * scaleY,
      };
    } else {
      return {
        x: (e.clientX - rect.left) * scaleX,
        y: (e.clientY - rect.top) * scaleY,
      };
    }
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;

    const drawingCanvas = drawingCanvasRef.current;
    if (!drawingCanvas) return;

    const drawingCtx = drawingCanvas.getContext('2d');
    if (!drawingCtx) return;

    const { x, y } = getCoordinates(e);

    drawingCtx.lineWidth = brushSize;
    drawingCtx.lineCap = 'round';
    drawingCtx.lineJoin = 'round';

    if (tool === 'eraser') {
      // Eraser only affects the drawing layer, not the base image
      drawingCtx.globalCompositeOperation = 'destination-out';
    } else {
      drawingCtx.globalCompositeOperation = 'source-over';
      drawingCtx.strokeStyle = selectedColor;
    }

    drawingCtx.lineTo(x, y);
    drawingCtx.stroke();
    drawingCtx.beginPath();
    drawingCtx.moveTo(x, y);
  };

  const clearCanvas = () => {
    if (originalImageRef.current) {
      drawImageToCanvas(originalImageRef.current);
      saveCanvasToStorage();
    }
  };

  const downloadArtwork = () => {
    const baseCanvas = baseCanvasRef.current;
    const drawingCanvas = drawingCanvasRef.current;
    if (!baseCanvas || !drawingCanvas) return;

    // Create a temporary canvas to combine both layers
    const tempCanvas = document.createElement('canvas');
    tempCanvas.width = baseCanvas.width;
    tempCanvas.height = baseCanvas.height;
    const tempCtx = tempCanvas.getContext('2d');
    if (!tempCtx) return;

    // Draw base layer first
    tempCtx.drawImage(baseCanvas, 0, 0);
    // Draw drawing layer on top
    tempCtx.drawImage(drawingCanvas, 0, 0);

    const link = document.createElement('a');
    link.download = 'my-colored-artwork.png';
    link.href = tempCanvas.toDataURL();
    link.click();
  };

  return (
    <>
      {/* Main Page - Inside Magazine Container */}
      <div className="relative size-full" data-name="7">
        <div className="absolute h-[2480px] left-0 top-0 w-[1754px]" data-name="image 27">
          <img alt="Background" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage27} />
        </div>
        <ColorMe 
          baseCanvasRef={baseCanvasRef}
          drawingCanvasRef={drawingCanvasRef}
          isDrawing={isDrawing}
          startDrawing={startDrawing}
          stopDrawing={stopDrawing}
          draw={draw}
        />
        <Pagination />

        {!imageLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-white/80 z-50">
            <div className="text-4xl font-black text-purple-600 animate-pulse">Loading coloring page...</div>
          </div>
        )}
      </div>

      {/* Painting Tools UI - Outside Magazine Container (Draggable Floating Panels) */}
      <div className="fixed inset-0 pointer-events-none z-50">
        {/* Left Side - Color Palette (Draggable) */}
        <motion.div 
          drag
          dragMomentum={false}
          dragElastic={0.05}
          className="absolute left-4 top-20 pointer-events-auto cursor-grab active:cursor-grabbing"
          initial={{ x: -300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          whileHover={{ scale: 1.01 }}
        >
          <div className="bg-white/98 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border-4 border-purple-500">
            {/* Drag Handle */}
            <div className="flex items-center justify-center mb-4 cursor-grab active:cursor-grabbing">
              <GripVertical className="w-12 h-12 text-purple-400" />
            </div>
            
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                <span className="text-white text-3xl">🎨</span>
              </div>
              <span className="font-black text-purple-900 text-3xl text-[48px]">Colors</span>
            </div>
            <div className="grid grid-cols-2 gap-5">
              {colorPalette.map((colorItem) => (
                <motion.button
                  key={colorItem.color}
                  onClick={() => {
                    setSelectedColor(colorItem.color);
                    setTool('brush');
                  }}
                  className={`w-28 h-28 rounded-2xl shadow-lg transition-all border-4 relative ${
                    selectedColor === colorItem.color && tool === 'brush'
                      ? 'ring-6 ring-purple-600 ring-offset-2 scale-110 border-purple-600'
                      : 'border-gray-300 hover:scale-105'
                  }`}
                  style={{ backgroundColor: colorItem.color }}
                  whileHover={{ rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  title={colorItem.name}
                >
                  {selectedColor === colorItem.color && tool === 'brush' && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Check className="w-14 h-14 text-white drop-shadow-lg" strokeWidth={5} />
                    </div>
                  )}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Side - Tools (Draggable) */}
        <motion.div 
          drag
          dragMomentum={false}
          dragElastic={0.05}
          className="absolute right-4 top-20 pointer-events-auto cursor-grab active:cursor-grabbing"
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          whileHover={{ scale: 1.01 }}
        >
          <div className="bg-white/98 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border-4 border-blue-500 space-y-5">
            {/* Drag Handle */}
            <div className="flex items-center justify-center mb-4 cursor-grab active:cursor-grabbing">
              <GripVertical className="w-12 h-12 text-blue-400" />
            </div>
            
            <div className="flex items-center gap-3 mb-3">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                <span className="text-white text-3xl">🛠️</span>
              </div>
              <span className="font-black text-blue-900 text-3xl text-[48px]">Tools</span>
            </div>
            
            {/* Brush */}
            <motion.button
              onClick={() => setTool('brush')}
              className={`w-full p-6 rounded-2xl flex flex-col items-center gap-3 transition-all shadow-lg ${
                tool === 'brush'
                  ? 'bg-gradient-to-br from-purple-600 to-purple-800 text-white scale-105 ring-4 ring-purple-300'
                  : 'bg-purple-100 text-purple-900 hover:bg-purple-200'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Paintbrush className="w-16 h-16" />
              <span className="text-2xl font-black text-[36px]">Brush</span>
            </motion.button>

            {/* Eraser */}
            <motion.button
              onClick={() => setTool('eraser')}
              className={`w-full p-6 rounded-2xl flex flex-col items-center gap-3 transition-all shadow-lg ${
                tool === 'eraser'
                  ? 'bg-gradient-to-br from-red-600 to-red-800 text-white scale-105 ring-4 ring-red-300'
                  : 'bg-red-100 text-red-900 hover:bg-red-200'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Eraser className="w-16 h-16" />
              <span className="text-2xl font-black text-[36px]">Eraser</span>
            </motion.button>

            {/* Undo/Redo Row */}
            <div className="grid grid-cols-2 gap-4">
              <motion.button
                onClick={undo}
                disabled={historyStep <= 0}
                className={`p-5 rounded-2xl flex flex-col items-center gap-2 transition-all shadow-lg ${
                  historyStep <= 0
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-br from-blue-500 to-blue-700 text-white hover:from-blue-600 hover:to-blue-800'
                }`}
                whileHover={historyStep > 0 ? { scale: 1.05 } : {}}
                whileTap={historyStep > 0 ? { scale: 0.95 } : {}}
              >
                <Undo className="w-12 h-12" />
                <span className="text-xl font-black text-[32px]">Undo</span>
              </motion.button>

              <motion.button
                onClick={redo}
                disabled={historyStep >= history.length - 1}
                className={`p-5 rounded-2xl flex flex-col items-center gap-2 transition-all shadow-lg ${
                  historyStep >= history.length - 1
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-br from-blue-500 to-blue-700 text-white hover:from-blue-600 hover:to-blue-800'
                }`}
                whileHover={historyStep < history.length - 1 ? { scale: 1.05 } : {}}
                whileTap={historyStep < history.length - 1 ? { scale: 0.95 } : {}}
              >
                <Redo className="w-12 h-12" />
                <span className="text-xl font-black text-[32px]">Redo</span>
              </motion.button>
            </div>

            {/* Brush Size Slider */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 shadow-lg border-2 border-gray-300">
              <label className="text-2xl font-black text-gray-700 block mb-4 text-center text-[36px]">
                Size: {brushSize}px
              </label>
              <input
                type="range"
                min="5"
                max="60"
                value={brushSize}
                onChange={(e) => setBrushSize(Number(e.target.value))}
                className="w-full h-4 accent-purple-600 cursor-pointer"
              />
            </div>

            {/* Reset */}
            <motion.button
              onClick={clearCanvas}
              className="w-full p-6 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-700 text-white flex flex-col items-center gap-3 shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <RotateCcw className="w-16 h-16" />
              <span className="text-2xl font-black text-[36px]">Reset</span>
            </motion.button>

            {/* Download */}
            <motion.button
              onClick={downloadArtwork}
              className="w-full p-6 rounded-2xl bg-gradient-to-br from-green-500 to-green-700 text-white flex flex-col items-center gap-3 shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="w-16 h-16" />
              <span className="text-2xl font-black text-[36px]">Save</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </>
  );
}
