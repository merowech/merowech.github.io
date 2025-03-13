import React, {useState, useEffect} from 'react';

import $ from 'jquery';

import './publications.css';

export function Publications() {

    const [data,
        setData] = useState({});
    const [error,
        setError] = useState(null);
    const [isLoaded,
        setIsLoaded] = useState(false);

    useEffect(() => {
        $.ajax({
            url: 'https://bib.dbvis.de/publications/tojson?author=709',
            dataType: 'json',
            cache: false,
            success: function (result) {
                setData(prevState => ({
                    ...prevState,
                    data: result
                }));
                setIsLoaded(true);
            },
            error: function (xhr, status, err) {
                setIsLoaded(true);
                setError(err);
            }
        });
    }, [])

    if (error) {
        return (
            <div>Error: {error.message}</div>
        );
    } else if (!isLoaded) {
        return (
            <div>Loading...</div>
        );
    } else if (Object.keys(data).length === 0) {
        return (
            <div>Error: Blocked by Client</div>
        );
    } 
    else {
        console.log(data);

        var projects = Object
            .values(data.data.publications)
            .map(function (publication) {
                console.log(publication);

                let publicationImage = 'https://bib.dbvis.de/static/images/thumb-default.png';
                if (publication.thumb) {
                    publicationImage = 'https://bib.dbvis.de/static/uploadedFiles/thumbs/' + publication.thumb;
                }
                let publicationURL = 'https://bib.dbvis.de/publications/view/' + publication.id;

                let publication_journal = publication.journal;
                if (publication.booktitle) {
                    publication_journal = publication.booktitle;
                }

                return <div key={publication.title} className="columns publications-item">
                    <div className="item-wrap">
                        <a href={publicationURL} title={publication.title}>
                            <img alt={publication.title} src={publicationImage} width="150" height="150"/>
                            <div className="overlay">
                                <div className="publications-item-meta">
                                    <h5>{publication.title}</h5>
                                    <p>{publication_journal}</p>
                                </div>
                            </div>
                            <div className="link-icon">
                                <i className="fa fa-link"></i>
                            </div>
                        </a>
                    </div>
                </div>
            })

        return (
            <section id="publications">
                <div className="row">
                    <div className="twelve columns collapsed">

                        <h1>Publications</h1>

                        <div id="publications-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                            {projects}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
