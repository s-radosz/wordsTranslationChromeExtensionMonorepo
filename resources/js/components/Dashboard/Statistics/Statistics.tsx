import * as React from "react";
import SingleStat from "./SingleStat/SingleStat";

type userType = {
    user: {
        countSavedWordsOverall: number;
        countSavedWordsLastWeek: number;
        countSavedWordsToday: number;
    };
};

const Statistics = ({ user }: userType) => {
    return (
        <div className="dashboard-statistics">
            <SingleStat
                number={
                    user?.countSavedWordsOverall
                        ? user?.countSavedWordsOverall
                        : 0
                }
                text="zapisanych ogółem"
            />

            <SingleStat
                number={
                    user?.countSavedWordsLastWeek
                        ? user?.countSavedWordsLastWeek
                        : 0
                }
                text="w tym tygodniu"
            />

            <SingleStat
                number={
                    user?.countSavedWordsToday ? user?.countSavedWordsToday : 0
                }
                text="zapisanych dzisiaj"
            />
        </div>
    );
};

export default Statistics;
