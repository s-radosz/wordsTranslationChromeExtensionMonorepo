import * as React from "react";
import Head from "./../utils/Head/Head";
import { Link } from "react-router-dom";
import works1 from "./../../../assets/images/works1.svg";
import works2 from "./../../../assets/images/works2.svg";
import works3 from "./../../../assets/images/works3.svg";
import works4 from "./../../../assets/images/works4.svg";
import poster from "./../../../assets/images/poster.png";
import video from "./../../../assets/videos/video.mp4";
import mobileHeader from "./../../../assets/images/mobileHeader.png";

const Home = () => {
    React.useEffect(() => {
        console.log(process.env);
    }, []);
    return (
        <>
            <Head title="Praktyczny Angielski - Ucz się angielskiego jakiego potrzebujesz!" />

            <div className="container landing">
                <div className="landing__main">
                    <div className="landing__main--wrapper">
                        {window?.innerWidth > 481 ? (
                            <video
                                width="100%"
                                height="100vh"
                                preload="auto"
                                poster={poster}
                                loop
                                autoPlay
                                muted
                            >
                                <source src={video} type="video/mp4" />
                            </video>
                        ) : (
                            <img className="videoImg" src={mobileHeader} />
                        )}

                        <div className="video__overlay"></div>

                        <div className="video__content">
                            <h1>
                                Masz dość tracenia czasu na przypadkowe
                                powtarzanie słownictwa, które już doskonale
                                znasz z przygotowanych planów?
                            </h1>
                            <h2>
                                Z Praktycznym Angielskim możesz zapisywać w
                                wyszukiwarce słowa, których znaczenia nie wiesz
                                i uczyć ich się później.
                            </h2>

                            <div className="landing__main--btn">
                                <a
                                    href="https://chrome.google.com/webstore/detail/praktyczny-angielski/fnachmfibcpiakmjhgkaopgbifnkeljd?hl=pl"
                                    title="Zainstaluj wtyczkę"
                                    target="_blank"
                                >
                                    <button className="red-btn landing__single-btn landing__single-btn--register">
                                        Zainstaluj na przeglądarce
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="landing__works">
                    <div className="landing__works--single display-desktop">
                        <img src={works2} />
                        <div className="landing__works--text-container">
                            <h3>Załóż konto na naszej stronie</h3>
                            <p>
                                Wejdź na stronę rejestracji klikając przycisk{" "}
                                <Link to="/rejestracja">
                                    <strong>Rejestracja</strong>
                                </Link>{" "}
                                w pasku menu.
                            </p>
                        </div>
                    </div>

                    <div className="landing__works--single display-mobile">
                        <div className="landing__works--text-container">
                            <h3>Załóż konto na naszej stronie</h3>
                            <p>
                                Wejdź na stronę rejestracji klikając przycisk{" "}
                                <Link to="/rejestracja">
                                    <strong>Rejestracja</strong>
                                </Link>{" "}
                                w pasku menu.
                            </p>
                        </div>
                        <img src={works2} />
                    </div>

                    <div className="landing__works--single">
                        <div className="landing__works--text-container">
                            <h3>
                                Zainstaluj wtyczkę na przeglądarce Google Chrome
                            </h3>
                            <p>
                                <strong>
                                    <a
                                        href="https://chrome.google.com/webstore/detail/praktyczny-angielski/fnachmfibcpiakmjhgkaopgbifnkeljd?hl=pl"
                                        title="Zainstaluj wtyczkę"
                                        target="_blank"
                                    >
                                        Odwiedź stronę pobierania.
                                    </a>
                                </strong>
                            </p>
                        </div>
                        <img src={works1} />
                    </div>

                    <div className="landing__works--single display-desktop">
                        <img src={works2} />
                        <div className="landing__works--text-container">
                            <h3>Zaloguj się do wtyczki</h3>
                            <p>
                                Po instalacji w pasku przeglądarki kliknij w
                                ikonę <span className="P-letter">P</span>
                                <span className="A-letter">A</span> i zaloguj
                                się do swojego konta, aby móc zapisywać
                                słowa/zwroty.
                            </p>
                        </div>
                    </div>

                    <div className="landing__works--single display-mobile">
                        <div className="landing__works--text-container">
                            <h3>Zaloguj się do wtyczki</h3>
                            <p>
                                Po instalacji w pasku przeglądarki kliknij w
                                ikonę <span className="P-letter">P</span>
                                <span className="A-letter">A</span> i zaloguj
                                się do swojego konta, aby móc zapisywać
                                słowa/zwroty.
                            </p>
                        </div>
                        <img src={works2} />
                    </div>

                    <div className="landing__works--single">
                        <div className="landing__works--text-container">
                            <h3>Zapisuj słownictwo</h3>
                            <p>
                                Odwiedź dowolną stronę w języku angielskim,
                                zaznacz interesującą Cię frazę, kliknij prawym
                                klawiszem myszy na zaznaczony tekst i wybierz
                                opcję 'Zapisz do Praktycznego Angielskiego'.
                            </p>
                        </div>
                        <img src={works3} />
                    </div>

                    <div className="landing__works--single display-desktop">
                        <img src={works4} />
                        <div className="landing__works--text-container">
                            <h3>Ucz się słownictwa</h3>
                            <p>
                                W dowolnym momencie wróć na naszą stronę i po
                                zalogowaniu się możesz zacząć uczyć się
                                zapisanych słów wybierając z menu na stronie
                                opcję 'Rozpocznij naukę'.
                            </p>
                        </div>
                    </div>

                    <div className="landing__works--single display-mobile">
                        <div className="landing__works--text-container">
                            <h3>Ucz się słownictwa</h3>
                            <p>
                                W dowolnym momencie wróć na naszą stronę i po
                                zalogowaniu się możesz zacząć uczyć się
                                zapisanych słów wybierając z menu na stronie
                                opcję 'Rozpocznij naukę'.
                            </p>
                        </div>
                        <img src={works4} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
