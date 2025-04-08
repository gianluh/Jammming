import { useState } from "react";
import ShowTracks from "./ShowTracks";

export default function AddedTracks({ addedTracks, setAddedTracks }) {
    // Create a Set to track the IDs of the already rendered tracks
    const addedTracksId = new Set()

    return (
        <div className="results overflow-y-auto mt-9 overflow-x-auto max-h-[456px] grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-8 p-6">
            {addedTracks.map(addedTrack => {
                // If the track ID is already in the Set, skip rendering it
                if (addedTracksId.has(addedTrack.id)) {
                    return null;
                }

                // Add the track ID to the Set
                addedTracksId.add(addedTrack.id);

                // Render the Added Track
                return <ShowTracks
                        key={addedTrack.id}
                        name={addedTrack.name}
                        id={addedTrack.id}
                        setAddedTracks={setAddedTracks}
                    />
            })}
        </div>
    );
}