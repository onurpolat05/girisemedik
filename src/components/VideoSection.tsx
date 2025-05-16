import React from 'react';

interface VideoProps {
  videoId: string;
  title: string;
}

const Video: React.FC<VideoProps> = ({ videoId, title }) => {
  return (
    <div className="bg-[#421108] rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]">
      <div className="aspect-video w-full">
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-[#d9d9d9] mb-2">{title}</h3>
      </div>
    </div>
  );
};

const VideoSection: React.FC = () => {
  const videos = [
    {
      videoId: "8WxTb4s2mmQ",
      title: "Girişemedik Ep.8 | İnşaatçılık, 25-30 Yaş Sendromculuğu ft. Sezi Barutçu Polat",
    },
    {
      videoId: "IpjXe_zG0c4",
      title: "Girişemedik Ep.7 | Kim Bu Yatırımcılar? Neredeler? | Yatırımcılık",
    },
    {
      videoId: "uSUwNsK38DQ",
      title: "Girişemedik Ep.6 | Fikirden Koda, Koddan Kaosa : Yazılımcılık",
    },


  ];

  return (
    <section id="videos" className="py-20 bg-[#3C0705]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#d9d9d9] mb-4">Son Hikayeler</h2>
          <p className="text-[#d9d9d9] opacity-80 max-w-2xl mx-auto">
            Gerçek girişimcilerin ağzından başarısızlık hikayeleri ve bu deneyimlerden öğrenilen değerli dersler.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <Video
              key={index}
              videoId={video.videoId}
              title={video.title}     
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="https://www.youtube.com/@Girisemedik/streams" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-[#d9d9d9] border-b-2 border-[#d9d9d9] pb-1 hover:text-white transition-colors duration-200"
          >
            Tüm Hikayeleri Gör
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;