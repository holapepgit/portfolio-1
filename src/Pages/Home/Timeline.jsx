const Timeline = () => {
  return (
    <section className="text-gray-200 bg-primary py-12">
      <div className="mx-auto text-center">
        <h2 className="text-3xl font-bold mb-2">Timeline</h2>
        <div className="mx-auto w-24 h-1 mb-5 bg-secondary"></div>
      </div>
      <div className="w-10/12 max-w-2xl mx-auto">
        <article className="timeline-item">
          <p>
            Several discussions have taken place in the public domain and among
            indigenes of these zones about the need for rail infrastructure in
            the zone. The Federal government, for some reason only known to it,
            has not considered it necessary to undertake this all-important
            project in the zones
          </p>
          <span className="number"> 1 </span>
        </article>
        <article className="timeline-item">
          <p>
            Since 2022 the needed for a rail system in the two zones has been
            constantly talked about in important places including among State
            governors and businessmen. Our group shopped around for a private
            sector investor who could undertake this project. We luckily found
            one.
          </p>
          <span className="number"> 2 </span>
        </article>
      </div>
    </section>
  );
};

export default Timeline;
