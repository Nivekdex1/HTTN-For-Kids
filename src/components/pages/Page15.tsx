import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Trophy, Star, ChevronRight, ChevronLeft, Sparkles } from 'lucide-react';
import imgImage97 from "figma:asset/67ab80fb00be230c929c88a75ce44a10c7b45708.png";
import imgImage98 from "figma:asset/792cb1fc6bf19941c372dfe6c4d0035bb69d35d5.png";
import imgImage99 from "figma:asset/8369d8dca6173b53d65e9cb99c1431570d0ab9b2.png";
import qAudio1 from "../../assets/15-1.mp3";
import qAudio2 from "../../assets/15-2.mp3";
import qAudio3 from "../../assets/15-3.mp3";
import qAudio4 from "../../assets/15-4.mp3";
import qAudio5 from "../../assets/15-5.mp3";
import qAudio6 from "../../assets/15-6.mp3";
import qAudio7 from "../../assets/15-7.mp3";
import qAudio8 from "../../assets/15-8.mp3";
import qAudio9 from "../../assets/15-9.mp3";
import qAudio10 from "../../assets/15-10.mp3";
import correctAudioSrc from "../../assets/15-correct.mp3";
import wrongAudioSrc from "../../assets/15-wrong.mp3";

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
  voiceover: string;
}

const quizQuestions: Question[] = [
  {
    id: 1,
    question: "What is the last book of the Bible?",
    options: ["Genesis", "Exodus", "Revelation", "Timothy"],
    correctAnswer: "Revelation",
    voiceover: "What is the last book of the Bible?"
  },
  {
    id: 2,
    question: "What is the first book of the New Testament",
    options: ["Matthew", "Mark", "Luke", "John"],
    correctAnswer: "Matthew",
    voiceover: "What is the first book of the New Testament"
  },
  {
    id: 3,
    question: "What is the book that comes after Jeremiah?",
    options: ["Lamentations", "Ezekiel", "Daniel", "Hosea"],
    correctAnswer: "Lamentations",
    voiceover: "What is the book that comes after Jeremiah?"
  },
  {
    id: 4,
    question: "What is the book with only 3 letters in its title?",
    options: ["Job", "Ruth", "Acts", "Jude"],
    correctAnswer: "Job",
    voiceover: "What is the book with only 3 letters in its title?"
  },
  {
    id: 5,
    question: "What is the book before Habakkuk?",
    options: ["Nahum", "Zephaniah", "Micah", "Jonah"],
    correctAnswer: "Nahum",
    voiceover: "What is the book before Habakkuk?"
  },
  {
    id: 6,
    question: "What is the last book in the Old Testament?",
    options: ["Zechariah", "Malachi", "Haggai", "Zephaniah"],
    correctAnswer: "Malachi",
    voiceover: "What is the last book in the Old Testament?"
  },
  {
    id: 7,
    question: "What is the book after Romans?",
    options: ["1 Corinthians", "2 Corinthians", "Galatians", "Ephesians"],
    correctAnswer: "1 Corinthians",
    voiceover: "What is the book after Romans?"
  },
  {
    id: 8,
    question: "What is the first book named after a woman?",
    options: ["Ruth", "Esther", "Mary", "Sarah"],
    correctAnswer: "Ruth",
    voiceover: "What is the first book named after a woman?"
  },
  {
    id: 9,
    question: "What is the first book before Haggai?",
    options: ["Zephaniah", "Habakkuk", "Nahum", "Micah"],
    correctAnswer: "Zephaniah",
    voiceover: "What is the first book before Haggai?"
  },
  {
    id: 10,
    question: "What is the 17th book of the New Testament?",
    options: ["Hebrews", "James", "1 Peter", "Titus"],
    correctAnswer: "Hebrews",
    voiceover: "What is the 17th book of the New Testament?"
  },
];

const questionAudioSources = [
  qAudio1,
  qAudio2,
  qAudio3,
  qAudio4,
  qAudio5,
  qAudio6,
  qAudio7,
  qAudio8,
  qAudio9,
  qAudio10,
];

function ScoreModal({ score, total, onClose, onRetake }: { score: number; total: number; onClose: () => void; onRetake: () => void }) {
  const percentage = Math.round((score / total) * 100);
  const isPerfect = score === total;
  const isGood = percentage >= 70;

  return (
    <motion.div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/70 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-3xl p-12 max-w-2xl mx-4 relative shadow-2xl border-4 border-yellow-400"
        initial={{ scale: 0.5, rotate: -10 }}
        animate={{ scale: 1, rotate: 0 }}
        exit={{ scale: 0.5, rotate: 10 }}
        transition={{ type: "spring", duration: 0.6 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-700 hover:text-gray-900 transition-colors bg-white rounded-full p-2"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="text-center">
          {/* Confetti effect */}
          {isPerfect && (
            <motion.div
              className="absolute inset-0 pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute"
                  initial={{
                    x: '50%',
                    y: '50%',
                    scale: 0
                  }}
                  animate={{
                    x: `${Math.random() * 100}%`,
                    y: `${Math.random() * 100}%`,
                    scale: [0, 1, 0],
                    rotate: Math.random() * 360
                  }}
                  transition={{
                    duration: 2,
                    delay: i * 0.05
                  }}
                >
                  <Sparkles className="w-6 h-6 text-yellow-500" />
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Trophy Animation */}
          <motion.div
            className="flex justify-center mb-6"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.2, type: "spring", duration: 0.8 }}
          >
            {isPerfect ? (
              <div className="relative">
                <Trophy className="w-32 h-32 text-yellow-500" />
                <motion.div
                  className="absolute inset-0"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <Trophy className="w-32 h-32 text-yellow-400 opacity-50" />
                </motion.div>
              </div>
            ) : (
              <Star className="w-32 h-32 text-blue-500" />
            )}
          </motion.div>

          {/* Title */}
          <motion.h2
            className="text-6xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {isPerfect ? "🎉 Perfect Score!" : isGood ? "🌟 Great Job!" : "💪 Good Try!"}
          </motion.h2>

          {/* Score */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            <p className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 mb-2">
              {score}/{total}
            </p>
            <p className="text-4xl text-gray-700 font-semibold">
              {percentage}% Correct
            </p>
          </motion.div>

          {/* Message */}
          <motion.p
            className="text-3xl text-gray-800 mb-8 font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {isPerfect
              ? "Amazing! You know your Bible books perfectly!"
              : isGood
              ? "Well done! Keep studying to get even better!"
              : "Keep learning! Try again to improve your score!"}
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <button
              onClick={onRetake}
              className="px-10 py-5 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-3xl rounded-full hover:scale-105 transition-transform shadow-xl font-bold"
            >
              🔄 Try Again
            </button>
            <button
              onClick={onClose}
              className="px-10 py-5 bg-white text-gray-800 text-3xl rounded-full hover:scale-105 transition-transform shadow-lg border-4 border-gray-300 font-bold"
            >
              Close
            </button>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function Pagination() {
  return (
    <div className="absolute bg-[red] box-border content-stretch flex gap-[6.087px] h-[42px] items-center justify-center left-[calc(50%-0.087px)] p-[6.087px] rounded-[60.87px] top-[2385px] translate-x-[-50%] w-[43.826px]" data-name="pagination">
      <p className="font-['Comic_Sans_MS:Bold',sans-serif] leading-[29.318px] not-italic relative shrink-0 text-[25.653px] text-center text-nowrap text-white whitespace-pre">15</p>
    </div>
  );
}

export default function Page15() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const questionAudioRefs = useRef<HTMLAudioElement[]>([]);
  const correctAudioRef = useRef<HTMLAudioElement | null>(null);
  const wrongAudioRef = useRef<HTMLAudioElement | null>(null);

  const currentQuestion = quizQuestions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / quizQuestions.length) * 100;
  const stopAllQuestionAudio = useCallback(() => {
    questionAudioRefs.current.forEach((audio) => {
      audio.pause();
      audio.currentTime = 0;
    });
  }, []);

  const stopFeedbackAudio = useCallback(() => {
    if (correctAudioRef.current) {
      correctAudioRef.current.pause();
      correctAudioRef.current.currentTime = 0;
    }
    if (wrongAudioRef.current) {
      wrongAudioRef.current.pause();
      wrongAudioRef.current.currentTime = 0;
    }
  }, []);

  const playQuestionAudio = useCallback(
    async (index: number) => {
      const audio = questionAudioRefs.current[index];
      if (!audio) return;

      stopAllQuestionAudio();
      try {
        audio.currentTime = 0;
        await audio.play();
      } catch (err) {
        console.warn(`Unable to play quiz question audio ${index + 1}`, err);
      }
    },
    [stopAllQuestionAudio]
  );

  const playFeedbackSound = useCallback(
    (correct: boolean) => {
      const target = correct ? correctAudioRef.current : wrongAudioRef.current;
      if (!target) return;

      stopFeedbackAudio();
      target.currentTime = 0;
      target.play().catch((err) => {
        console.warn(
          correct ? 'Unable to play correct answer audio' : 'Unable to play wrong answer audio',
          err
        );
      });
    },
    [stopFeedbackAudio]
  );

  useEffect(() => {
    questionAudioRefs.current = questionAudioSources.map((src) => {
      const audio = new Audio(src);
      audio.preload = 'auto';
      return audio;
    });

    correctAudioRef.current = new Audio(correctAudioSrc);
    correctAudioRef.current.preload = 'auto';
    wrongAudioRef.current = new Audio(wrongAudioSrc);
    wrongAudioRef.current.preload = 'auto';

    return () => {
      stopAllQuestionAudio();
      stopFeedbackAudio();
      questionAudioRefs.current = [];
      correctAudioRef.current = null;
      wrongAudioRef.current = null;
    };
  }, [stopAllQuestionAudio, stopFeedbackAudio]);

  useEffect(() => {
    stopFeedbackAudio();
    stopAllQuestionAudio();

    const timer = setTimeout(() => {
      playQuestionAudio(currentQuestionIndex);
    }, 600);

    return () => {
      clearTimeout(timer);
    };
  }, [currentQuestionIndex, playQuestionAudio, stopAllQuestionAudio, stopFeedbackAudio]);

  const handleAnswer = (answer: string) => {
    if (selectedAnswer) return; // Already answered

    setSelectedAnswer(answer);
    const correct = answer === currentQuestion.correctAnswer;
    setIsCorrect(correct);

    // Save answer
    setAnswers(prev => ({ ...prev, [currentQuestion.id]: answer }));

    stopAllQuestionAudio();
    playFeedbackSound(correct);
  };

  const handleNext = () => {
    stopFeedbackAudio();
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setIsCorrect(null);
    } else {
      // Quiz completed
      setShowScore(true);
      stopAllQuestionAudio();
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      stopFeedbackAudio();
      setCurrentQuestionIndex(prev => prev - 1);
      setSelectedAnswer(null);
      setIsCorrect(null);
    }
  };

  const calculateScore = () => {
    let correct = 0;
    quizQuestions.forEach(q => {
      if (answers[q.id] === q.correctAnswer) {
        correct++;
      }
    });
    return correct;
  };

  const handleRetake = () => {
    stopFeedbackAudio();
    stopAllQuestionAudio();
    setAnswers({});
    setShowScore(false);
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setIsCorrect(null);
  };

  return (
    <>
      <div className="bg-white relative size-full overflow-hidden" data-name="15">
        <div className="absolute h-[2480px] left-0 top-0 w-[1754px]" data-name="image 97">
          <img alt="Background" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage97} />
        </div>
        
        {/* Bouncing Title Banner */}
        <motion.div 
          className="absolute h-[590px] left-[248px] top-[228px] w-[1122px] z-20" 
          data-name="image 98"
          initial={{ opacity: 0, scale: 0.9, y: -50 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            y: [0, -20, 0]
          }}
          transition={{ 
            opacity: { duration: 0.8, delay: 0.2 },
            scale: { duration: 0.8, delay: 0.2 },
            y: { 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }
          }}
        >
          <img alt="Bible Quiz Title" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage98} />
        </motion.div>
        
        <motion.div 
          className="absolute h-[52px] left-[152px] top-[149px] w-[379px] z-20" 
          data-name="image 99"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <img alt="Brain Feeders" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage99} />
        </motion.div>

        {/* Quiz Card Container */}
        <motion.div 
          className="absolute left-[calc(50%)] top-[900px] translate-x-[-50%] w-[1400px] z-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-3">
              <span className="text-2xl font-bold text-purple-700">Question {currentQuestionIndex + 1} of {quizQuestions.length}</span>
              <span className="text-2xl font-bold text-purple-700">{Math.round(progress)}%</span>
            </div>
            <div className="h-6 bg-gray-200 rounded-full overflow-hidden shadow-inner">
              <motion.div
                className="h-full bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>

          {/* Question Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestion.id}
              className="bg-gradient-to-br from-white to-blue-50 rounded-3xl p-12 shadow-2xl border-4 border-blue-200"
              initial={{ opacity: 0, x: 100, rotateY: 90 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              exit={{ opacity: 0, x: -100, rotateY: -90 }}
              transition={{ duration: 0.4 }}
            >
              {/* Question Text */}
              <motion.h2 
                className="text-5xl font-bold text-gray-800 mb-12 text-center leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {currentQuestion.question}
              </motion.h2>

              {/* Answer Options */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                {currentQuestion.options.map((option, index) => {
                  const isSelected = selectedAnswer === option;
                  const isCorrectAnswer = option === currentQuestion.correctAnswer;
                  const showCorrect = selectedAnswer && isCorrectAnswer;
                  const showWrong = isSelected && !isCorrectAnswer;

                  return (
                    <motion.button
                      key={option}
                      onClick={() => handleAnswer(option)}
                      disabled={!!selectedAnswer}
                      className={`p-8 rounded-2xl text-3xl font-bold transition-all duration-300 transform ${
                        showCorrect
                          ? 'bg-green-500 text-white scale-105 shadow-2xl ring-8 ring-green-300'
                          : showWrong
                          ? 'bg-red-500 text-white scale-95 shadow-lg'
                          : selectedAnswer
                          ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                          : 'bg-gradient-to-br from-yellow-300 to-orange-300 text-gray-900 hover:scale-105 hover:shadow-xl cursor-pointer'
                      }`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.1 * index + 0.3 }}
                      whileHover={!selectedAnswer ? { scale: 1.05 } : {}}
                      whileTap={!selectedAnswer ? { scale: 0.95 } : {}}
                    >
                      <span className="flex items-center justify-center gap-4">
                        {option}
                        {showCorrect && <span className="text-5xl">✓</span>}
                        {showWrong && <span className="text-5xl">✗</span>}
                      </span>
                    </motion.button>
                  );
                })}
              </div>

              {/* Feedback Message */}
              <AnimatePresence>
                {selectedAnswer && (
                  <motion.div
                    className={`text-center py-6 px-8 rounded-2xl mb-6 text-3xl font-bold ${
                      isCorrect
                        ? 'bg-green-100 text-green-800 border-4 border-green-400'
                        : 'bg-orange-100 text-orange-800 border-4 border-orange-400'
                    }`}
                    initial={{ opacity: 0, scale: 0.8, y: -20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: -20 }}
                  >
                    {isCorrect ? '🎉 Awesome! That\'s correct!' : `📖 The correct answer is: ${currentQuestion.correctAnswer}`}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Navigation Buttons */}
              <div className="flex justify-between items-center gap-4">
                <button
                  onClick={handlePrevious}
                  disabled={currentQuestionIndex === 0}
                  className={`flex items-center gap-3 px-8 py-4 rounded-full text-2xl font-bold transition-all ${
                    currentQuestionIndex === 0
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:scale-105 shadow-lg'
                  }`}
                >
                  <ChevronLeft className="w-8 h-8" />
                  Previous
                </button>

                {selectedAnswer && (
                  <motion.button
                    onClick={handleNext}
                    className="flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-3xl font-bold hover:scale-105 transition-transform shadow-xl"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {currentQuestionIndex === quizQuestions.length - 1 ? '🏆 Finish Quiz' : 'Next Question'}
                    {currentQuestionIndex < quizQuestions.length - 1 && <ChevronRight className="w-8 h-8" />}
                  </motion.button>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        <Pagination />
      </div>

      {/* Score Modal */}
      <AnimatePresence>
        {showScore && (
          <ScoreModal
            score={calculateScore()}
            total={quizQuestions.length}
            onClose={() => setShowScore(false)}
            onRetake={handleRetake}
          />
        )}
      </AnimatePresence>
    </>
  );
}
