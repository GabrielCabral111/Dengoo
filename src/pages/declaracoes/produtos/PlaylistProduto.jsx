import { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { FaPlay, FaPause, FaStepBackward, FaStepForward, FaRandom, FaVolumeUp, FaHeart, FaRegHeart } from 'react-icons/fa';


import Audio1 from '../music/Malcolm.mp3';
import Audio2 from '../music/GrupoRevelação.mp3';
import Audio3 from '../music/BK.mp3';
import Audio4 from '../music/Delacruz.mp3';
import Audio5 from '../music/Djonga.mp3';

import you from '../images/Musicalove.png';
import revelacao from '../images/revelacao.png';
import Delacruz from '../images/Delacruz.png';
import planos from '../images/planos.png';
import jonga from '../images/Djonga.png';

const MusicPlayer = () => { 
  const songs = [
    {
      id: 1,
      title: "Malcolm Todd - Chest Pain S2 (I Love)", 
      artist: "Malcolm Todd",
      duration: "3:23",
      cover: you ,
      audio: Audio1
    },
    {
      id: 2,
      title: "Grupo Revelação - Essência Da Paixão",
      artist: "Grupo Revelação",
      duration: "4.18",
      cover: revelacao,
      audio: Audio2
    },
    {
      id: 3,
      title: "BK' - Planos part. Luccas Carlos ",
      artist: "BK",
      duration: "3:40",
      cover: planos,
      audio: Audio3
    },
    {
      id: 4,
      title: "Delacruz - Sunshine",
      artist: "Delacruz",
      duration: "3.47",
      cover: Delacruz,
      audio: Audio4
    },
    {
      id: 5,
      title: " DJONGA • MELHOR QUE ONTEM",
      artist: "DJONGA",
      duration: "3:35",
      cover: jonga,
      audio: Audio5
    }
  ];

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(100);
  const [progress, setProgress] = useState(0);
  const [likedSongs, setLikedSongs] = useState([]);
  const audioRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, currentSongIndex]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume]);

  useEffect(() => {
    const audio = audioRef.current;
    const updateProgress = () => {
      if (audio.duration) {
        setProgress((audio.currentTime / audio.duration) * 100);
      }
    };

    audio.addEventListener('timeupdate', updateProgress);
    audio.addEventListener('ended', nextSong);

    return () => {
      audio.removeEventListener('timeupdate', updateProgress);
      audio.removeEventListener('ended', nextSong);
    };
  }, []);

  const togglePlay = () => setIsPlaying(!isPlaying);

  const nextSong = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songs.length);
    setIsPlaying(true);
    if (swiperRef.current) swiperRef.current.slideNext();
  };

  const prevSong = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex - 1 + songs.length) % songs.length);
    setIsPlaying(true);
    if (swiperRef.current) swiperRef.current.slidePrev();
  };

  const shuffleSongs = () => {
    const newIndex = Math.floor(Math.random() * songs.length);
    if (newIndex !== currentSongIndex) {
      setCurrentSongIndex(newIndex);
      setIsPlaying(true);
      if (swiperRef.current) swiperRef.current.slideTo(newIndex);
    }
  };

  const handleVolumeChange = (e) => setVolume(e.target.value);

  const handleProgressChange = (e) => {
    const newProgress = e.target.value;
    setProgress(newProgress);
    if (audioRef.current) {
      audioRef.current.currentTime = (newProgress / 100) * audioRef.current.duration;
    }
  };

  const toggleLike = (songId) => {
    setLikedSongs((prev) => prev.includes(songId) ? prev.filter(id => id !== songId) : [...prev, songId]);
  };

  const handleSwiperSlideChange = (swiper) => {
    setCurrentSongIndex(swiper.realIndex);
    setIsPlaying(true);
  };

  return (
    <section className="min-h-screen bg-[#001124] bg-[url('./imagens/music_fundo.jpg')] bg-cover bg-no-repeat flex items-center justify-center p-4">
      <div className="relative w-full max-w-[1440px] bg-transparent shadow-lg rounded-xl overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-[-3%] left-[-5%] w-40 h-40 md:w-64 md:h-64 bg-[#5768af] rounded-full transition-all duration-5000 hover:left-[85%] hover:scale-125 hover:bg-[#a0acbd]"></div>
          <div className="absolute bottom-[-3%] right-[-5%] w-40 h-40 md:w-64 md:h-64 bg-[#ab4c72] rounded-full transition-all duration-5000 hover:right-[85%] hover:scale-125 hover:bg-[#bda5ad]"></div>
        </div>

        <div className="relative z-10 w-full h-full grid place-items-center bg-[#3536484d] backdrop-blur-xl border border-white/50 rounded-xl shadow-xl text-amber-50 overflow-y-auto p-4 sm:p-6 md:p-8">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="flex justify-center">
              <Swiper
                ref={swiperRef}
                effect={'cards'}
                grabCursor={true}
                modules={[EffectCards]}
                className="w-64 sm:w-72"
                initialSlide={currentSongIndex}
                onSlideChange={handleSwiperSlideChange}
              >
                {songs.map((song) => (
                  <SwiperSlide key={song.id} className="bg-gray-200 p-4 rounded-lg">
                    <img src={song.cover} alt={song.title} className="w-full aspect-square object-cover rounded mb-3 pointer-events-none" />
                    <h1 className="text-center font-['Permanent_Marker'] text-gray-800 uppercase tracking-wider rotate-[-3deg] text-sm sm:text-base">
                      {song.title}
                    </h1>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <div className="w-full">
              <div className="space-y-4">
                {songs.map((song, index) => (
                  <div
                    key={song.id}
                    className={`flex items-center p-2 sm:p-3 rounded-lg cursor-pointer transition-colors ${currentSongIndex === index ? 'bg-[rgba(149,153,186,0.4)]' : 'hover:bg-[rgba(149,153,186,0.2)]'} border-b border-[#6490f6]`}
                    onClick={() => {
                      setCurrentSongIndex(index);
                      setIsPlaying(true);
                      if (swiperRef.current) swiperRef.current.slideTo(index);
                    }}
                  >
                    <img src={song.cover} alt={song.title} className="w-10 h-10 sm:w-12 sm:h-12 object-cover rounded mr-2 sm:mr-4" />
                    <div className="flex-grow">
                      <p className="font-medium text-sm sm:text-base">{song.title}</p>
                      <p className="text-xs sm:text-sm opacity-50">{song.artist}</p>
                    </div>
                    <p className="mx-2 sm:mx-4 text-xs sm:text-sm">{song.duration}</p>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleLike(song.id);
                      }}
                      className="text-lg"
                    >
                      {likedSongs.includes(song.id) ? <FaHeart className="text-red-500" /> : <FaRegHeart />}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="sticky bottom-0 w-full max-w-4xl mt-8 border border-white/30 rounded-xl bg-[rgba(5,9,51,0.4)] backdrop-blur-lg shadow-lg p-4 z-20">
            <input
              type="range"
              min="0"
              max="100"
              value={progress}
              onChange={handleProgressChange}
              className="w-full h-1.5 bg-gradient-to-r from-amber-50 via-[#c1daff] to-[#6490f6] rounded-full appearance-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-amber-50 mb-4"
            />

            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8">
              <button onClick={shuffleSongs} className="text-xl hover:scale-105 transition-transform">
                <FaRandom />
              </button>
              <button onClick={prevSong} className="text-xl hover:scale-105 transition-transform">
                <FaStepBackward />
              </button>
              <button
                onClick={togglePlay}
                className="w-12 h-12 flex items-center justify-center rounded-full bg-amber-50 text-[#6490f6] shadow-lg hover:scale-105 transition-transform"
              >
                {isPlaying ? <FaPause className="text-xl" /> : <FaPlay className="text-xl" />}
              </button>
              <button onClick={nextSong} className="text-xl hover:scale-105 transition-transform">
                <FaStepForward />
              </button>
              <div className="flex items-center">
                <FaVolumeUp className="mr-2" />
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={volume}
                  onChange={handleVolumeChange}
                  className="w-24 h-1 bg-[#6490f6] rounded-full appearance-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-amber-50"
                />
              </div>
            </div>

            <audio ref={audioRef} src={songs[currentSongIndex].audio} preload="auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MusicPlayer;

