import * as React from "react";
import SingleStat from "./SingleStat/SingleStat"

type userType = {
    user: {
        countSavedWordsOverall: number,
        countSavedWordsLastWeek: number,
        countSavedWordsToday: number
    }
}

const Statistics = ({ user }: userType) => {
    return (
        <div className="dashboard-statistics">
            <SingleStat
                number={user.countSavedWordsOverall}
                text="zapisanych ogółem"
            />

            <SingleStat
                number={user.countSavedWordsLastWeek}
                text="w tym tygodniu"
            />

            <SingleStat
                number={user.countSavedWordsToday}
                text="zapisanych dzisiaj"
            />
        </div>
    )
}

export default Statistics;