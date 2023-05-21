/**
 * Given a list of teams, we need to expose the teams in different ways:
 * - Criteria 1: depending on the score, order the list from highest to lowest.
 * - Criteria 2: depending on the score, order the list from lowest to highest.
 * - Criteria 3: depending on the player's quantity, show ONLY the teams that has more than 3 players.
 *
 * What you need to implement is:
 * - 3 buttons. Each of them need to execute a criteria.
 * - The list of teams should be updated dynamically depending on the selected filter.
 * - Each team item should display: Team Name / Player’s quantity / Total Score of each team.
 */

import { useState } from "react";

const TEAMS = [
    {
        name: "Red",
        players: ["Robin", "Rey", "Roger", "Richard"],
        games: [
            {
                score: 10,
                city: "LA",
            },
            {
                score: 1,
                city: "NJ",
            },
            {
                score: 3,
                city: "NY",
            },
        ],
    },
    {
        name: "Blue",
        players: ["Bob", "Ben"],
        games: [
            {
                score: 6,
                city: "CA",
            },
            {
                score: 3,
                city: "LA",
            },
        ],
    },
    {
        name: "Yellow",
        players: ["Yesmin", "Yuliana", "Yosemite"],
        games: [
            {
                score: 2,
                city: "NY",
            },
            {
                score: 4,
                city: "LA",
            },
            {
                score: 7,
                city: "AK",
            },
        ],
    },
];

const Items = (props) => {
	const displaying = `Team Name: ${props.name} - Player’s quantity: ${props.quantity} - Total Score of each team: ${props.score}`
    return <li>{displaying}</li>;
};

export function TeamsList() {
    const [teams, setTeams] = useState([]);
    const [error, setError] = useState(true);

    const newTeams = TEAMS.map((team) => {
        const teamName = team.name ? team.name : "";
        const teamQuantity = team.players ? team.players.length : 0;
        const teamScore = team.games
            ? team.games.map((v) => v.score).reduce((a, b) => a + b, 0)
            : 0;
        return {
            teamName,
            teamQuantity,
            teamScore: teamScore,
        };
    });

    function setInitialList() {
        setTeams(newTeams);
        setError(false);
    }

    // Order teams by score (highest to lowest)
    function orderTeamByScoreHighestToLowest() {
        // Write your code here
        if (teams.length) {
            const highestToLowest = newTeams.sort(
                (a, b) => a.teamScore - b.teamScore
            );
            setTeams(highestToLowest);
            setError(false);
        }
    }

    // Order teams by score (lowest to highest)
    function orderTeamByScoreLowestToHighest() {
        // Write your code here
        if (teams.length) {
            const lowestToHighest = newTeams.sort(
                (a, b) => a.teamScore + b.teamScore
            );
            setTeams(lowestToHighest);
        }
    }

    // Filtering teams that with at least 3 players
    function teamsWithMoreThanThreePlayers() {
        // Write your code here
        if (teams.length) {
            const threePlayers = newTeams.filter(
                (team) => team.teamQuantity >= 3
            );
            setTeams(threePlayers);
            setError(false);
        }
    }

    return (
        <div>
            <button onClick={setInitialList}>Initial list</button>

            <button onClick={orderTeamByScoreHighestToLowest}>
                Highest to Lowest
            </button>
            <button onClick={orderTeamByScoreLowestToHighest}>
                Lowest to Highest
            </button>
            <button onClick={teamsWithMoreThanThreePlayers}>
                Teams with at least 3 players
            </button>
            {error && <h4>Click "Initial List" to load values</h4>}
            {!error && (
                <ul className="teams">
                    {teams.map((team, index) => (
                        <Items
                            key={index}
                            name={team.teamName}
                            quantity={team.teamQuantity}
                            score={team.teamScore}
                        />
                    ))}
                </ul>
            )}
        </div>
    );
}
