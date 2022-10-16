import * as React from "react";
import ACTIONS from "../../../modules/actions/wordsActions";
import { connect } from "react-redux";
import ReactPaginate from 'react-paginate';
import WordsListRow from "./WordsListRow/WordsListRow"

const WordsList = ({ handlePageClick, handleAddIllustration, handleRemoveWord, words }) => {
    return (
        <>
            {words && words.result && words.result.data && words.result.data.length > 0 && <div className="table-responsive">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">EN</th>
                            <th scope="col">PL</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {words && words.result &&
                            words.result.data.map((word, i) => {
                                return (
                                    <WordsListRow
                                        key={`word-${i}`}
                                        word={word}
                                        i={i}
                                        handleRemoveWord={handleRemoveWord}
                                        handleAddIllustration={handleAddIllustration}
                                    />
                                );
                            })}
                    </tbody>


                </table>
                <nav aria-label="Page navigation example">
                    <ReactPaginate
                        previousLabel={false}
                        nextLabell={false}
                        forcePage={words.current_page}
                        breakLabel={'...'}
                        breakClassName={'break-me'}
                        pageCount={words.last_page}
                        marginPagesDisplayed={1}
                        pageRangeDisplayed={2}
                        onPageChange={handlePageClick}
                        containerClassName={'pagination'}
                        subContainerClassName={'pages pagination'}
                        activeClassName={'active'}
                    />
                </nav>
            </div>}
        </>
    )
}
const mapStateToProps = state => ({
    user: state.user,
    words: state.words,
    config: state.config
});

const mapDispatchToProps = dispatch => ({
    createWords: user => dispatch(ACTIONS.createWords(user)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WordsList);