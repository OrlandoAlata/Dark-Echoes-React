import { useState } from "react";
import { episodeList } from "./data";

export default function App() {
  const [episodes] = useState(episodeList);
  const [chosenEpisode, setChosenEpisode] = useState();
  function EpisodeDetails() {
    if (!chosenEpisode) {
      return (
        <section className="epDetails">
          <h2>Episode Details</h2>
          <p>Select an episode to learn more.</p>
        </section>
      );
    }
    return (
      <section className="epDetails">
        <h2>Episode {chosenEpisode.id}</h2>
        <h3>{chosenEpisode.title}</h3>
        <p>{chosenEpisode.description}</p>
        <button className="watch-button">Watch now</button>
      </section>
    );
  }

  function EpisodeList() {
    return (
      <section className="episodes">
        <h2>Episodes</h2>
        <ol>
          {episodes.map((episode) => (
            <li
              key={episode.id}
              onClick={() => setChosenEpisode(episode)}
              className={chosenEpisode?.id === episode.id ? "chosen" : ""}
            >
              {episode.title}
            </li>
          ))}
        </ol>
      </section>
    );
  }

  return (
    <>
      <header>
        <h1> Dark Echoes</h1>
      </header>
      <main>
        <EpisodeList />
        <EpisodeDetails />
      </main>
    </>
  );
}
