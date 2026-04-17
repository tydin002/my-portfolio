function Blog() {
  return (
    <main className="blog-page">
      <header className="blog-header section">
        <h1>Spring break journal</h1>
        <p className="blog-header__sub">
          Notes from my 2026 spring break — a short coastal trip with a friend, a few slow mornings,
          and time away from deadlines. I wanted to document what stood out, not just where we went.
        </p>
      </header>

      <article className="blog-post section">
        <header className="blog-post__title">
          <h2>Coastal road trip: loosely planned, mostly relaxing</h2>
          <p className="blog-post__meta">Spring break 2026</p>
        </header>

        <figure className="blog-media">
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80"
            alt="Beach at sunset"
            width={1200}
            height={675}
            loading="lazy"
          />
          <figcaption>
            First evening on the beach — a clear reminder of why I wanted to leave campus for a few
            days after midterms.
          </figcaption>
        </figure>

        <div className="blog-body">
          <p>
            Spring break began on a Friday after class, once I had finally packed and accepted that
            my brain was done processing exams for the week. My friend and I had a loose plan: drive
            toward the coast, stay flexible, and prioritize rest over a packed schedule. We brought
            snacks, a long playlist, and no rigid itinerary. Traffic leaving North County was slow,
            but the trade-off was worth it: time away from lecture halls and a routine that had
            started to feel repetitive.
          </p>
          <p>
            Over the next few days we settled into a simple rhythm — late breakfasts, coffee shops,
            walks on the pier, and unhurried afternoons. I tried fish tacos from a popular food truck
            (the line was long, but the meal lived up to it), and we shared a pastry at a cafe
            between errands. Small moments like watching gulls near the water reminded me how easy it
            is to stay glued to a screen during the semester; being outside without a deadline
            attached felt surprisingly grounding.
          </p>
        </div>

        <div className="blog-body">
          <p>
            What I valued most was not a single landmark but the break from constantly checking
            Canvas and email. I returned with sand still in my backpack and too many unsorted photos,
            but also with a clearer head for the second half of the term. The trip was simple on
            paper, but it did what I needed it to do: create distance from school long enough to
            come back a little more focused.
          </p>
        </div>
      </article>

      <article className="blog-post section section--tight">
        <header className="blog-post__title">
          <h2>A rainy day in the city</h2>
          <p className="blog-post__meta">Spring break 2026</p>
        </header>

        <div className="blog-body">
          <p>
            Not every day was sunny. Midweek brought drizzle and gray skies, and we briefly
            considered staying in. Instead we visited a museum, browsed a bookstore, and kept
            walking. We picked up pastries on the way back to the car; simple food after a long walk
            felt like the right kind of reward.
          </p>
          <p>
            That evening we found a rooftop spot even though the air was cool. Watching the city
            lights through rain on the glass was a quiet way to end the day. I saved a few new songs
            to a playlist — small souvenirs that cost nothing and still remind me of the trip when I
            hear them. Sometimes the days that look unremarkable on an itinerary end up balancing out
            the louder, sunnier ones.
          </p>
        </div>

        <figure className="blog-media blog-media--compact">
          <img
            src="https://images.unsplash.com/photo-1514565131-fce0801e5785?w=1200&q=80"
            alt="City at night after rain"
            width={1200}
            height={675}
            loading="lazy"
          />
          <figcaption>
            The city after rain — the photo does not quite capture how sharp the lights looked in
            person, but it comes close.
          </figcaption>
        </figure>
      </article>
    </main>
  );
}

export default Blog;
