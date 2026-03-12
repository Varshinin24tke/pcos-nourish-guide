const videos = [
  { id: "VrFaw0J7p_E", title: "PCOS Diet: What You Should Eat" },
  { id: "nFICQc4tmdc", title: "Best Foods for PCOS Management" },
  { id: "5JvbjrLESPs", title: "Exercise Tips for PCOS" },
];

const VideoSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Educational <span className="text-primary">Videos</span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Watch expert-curated videos to learn more about PCOS diet and
            lifestyle management.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {videos.map((v) => (
            <div
              key={v.id}
              className="overflow-hidden rounded-2xl bg-card soft-shadow"
            >
              <div className="aspect-video">
                <iframe
                  src={`https://www.youtube.com/embed/${v.id}`}
                  title={v.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full"
                  loading="lazy"
                />
              </div>

              <div className="p-4">
                <h3 className="font-bold">{v.title}</h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default VideoSection;