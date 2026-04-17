function Blog() {
  return (
    <main className="blog-page">
      <header className="blog-header section">
        <h1>Spring break journal</h1>
        <p className="blog-header__sub">
          Field notes from a week off campus — coastal miles, city afternoons, and the small rituals
          that made the break feel like a real reset.
        </p>
      </header>

      <article className="blog-post section">
        <header className="blog-post__title">
          <h2>Coast highway, coffee stops, and a lot of sun</h2>
          <p className="blog-post__meta">Spring break 2026 · Road trip</p>
        </header>

        <figure className="blog-media">
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80"
            alt="Calm ocean waves meeting a sandy shoreline at sunset"
            width={1200}
            height={675}
            loading="lazy"
          />
          <figcaption>
            The first evening on the coast — warm light, cool breeze, and the kind of quiet that
            makes you forget about due dates for a minute.
          </figcaption>
        </figure>

        <div className="blog-body">
          <p>
            Spring break started the way the best trips do: an overly ambitious playlist, a cooler
            packed with snacks, and a route that was only half planned. I left campus on Friday
            afternoon and pointed the car toward the coast, trading lecture halls for highway lanes
            and the steady rhythm of turn signals in beach-town traffic. By sunset I was walking
            barefoot on cold sand, watching the last light melt into the water, and realizing how
            much I had needed a change of scenery after midterms.
          </p>
          <p>
            The next few days blended together in the best way — slow mornings in coffee shops that
            felt like living rooms, afternoons wandering piers and tide pools, and evenings where the
            only goal was a good place to watch the sky turn pink. I tried fish tacos from a food
            truck with a line around the block, split a giant cinnamon roll with a friend who met me
            halfway, and laughed at seagulls stealing fries from unattended trays. None of it was
            glamorous on paper, but it felt full: warm air, salty hair, and conversations that
            stretched until the streetlights came on.
          </p>
        </div>

        <figure className="blog-media">
          <img
            src="https://images.unsplash.com/photo-1544148103-07729bf6d977?w=1200&q=80"
            alt="Coffee cup and notebook on a cafe table near a window"
            width={1200}
            height={675}
            loading="lazy"
          />
          <figcaption>
            Slow mornings — journaling, people-watching, and pretending I would catch up on readings
            (I did not).
          </figcaption>
        </figure>

        <div className="blog-body">
          <p>
            What stayed with me was not a single landmark; it was the feeling of being unplugged
            enough to notice small things again — the sound of waves, the way a town changes when
            you explore it on foot, the relief of not checking the LMS every hour. I came back with
            sand in my backpack, a camera roll begging for edits, and a clearer head for the rest of
            the term.
          </p>
        </div>

        <div className="blog-video-wrap">
          <h3 className="blog-video-wrap__label">Clip from the coast</h3>
          <p className="blog-video-wrap__note">
            Quick aerial clip from the coast — the kind of view that doesn&apos;t fit in a photo.
          </p>
          <video className="blog-video" controls playsInline preload="metadata">
            <source
              src="https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-a-beach-with-waves-1088-large.mp4"
              type="video/mp4"
            />
            Your browser does not support embedded video.
          </video>
          <p className="blog-video-wrap__linkout">
            Sometimes I browse{' '}
            <a
              href="https://www.youtube.com/results?search_query=coastal+highway+drive"
              target="_blank"
              rel="noreferrer"
            >
              coastal drive clips
            </a>{' '}
            when I&apos;m planning the next long weekend.
          </p>
        </div>
      </article>

      <article className="blog-post section section--tight">
        <header className="blog-post__title">
          <h2>One rainy afternoon in the city</h2>
          <p className="blog-post__meta">Spring break 2026 · Day trip</p>
        </header>

        <div className="blog-body">
          <p>
            Not every spring break moment is sunshine. Midweek we caught a gray, drizzly day and
            leaned into it: museums, bookstores, and a long lunch while rain streaked the windows.
            There is something cozy about being slightly overdressed for weather and carrying a
            paper bag of pastries back to the car.
          </p>
          <p>
            We ended the day on a rooftop deck anyway — jackets zipped, city lights flickering on,
            and the easy talk that only happens when nobody is rushing home. I left with a few new
            playlists, photos I actually like, and a reminder that rest can look like motion too, as
            long as it feels chosen.
          </p>
        </div>

        <figure className="blog-media blog-media--compact">
          <img
            src="https://images.unsplash.com/photo-1514565131-fce0801e5785?w=1200&q=80"
            alt="City skyline at dusk with lights reflecting after rain"
            width={1200}
            height={675}
            loading="lazy"
          />
          <figcaption>Drizzle, neon, and the kind of evening that feels like a movie montage.</figcaption>
        </figure>
      </article>
    </main>
  );
}

export default Blog;
