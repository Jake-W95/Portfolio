// import CV from '13-react-module\04-react-portfolio-lesson\react-portfolio\src\images\Jake_Wallace_Coding_CV.pdf'
import { useState } from 'react'
import { Document, Page } from 'react-pdf'


function CVPage() {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    // import cv from '../images/'

    function onDocLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }
    return (
        <>
            <div>
                <Document file='url(Jake_Wallace_Coding_CV.pdf)' onLoadSuccess={onDocLoadSuccess}>
                    <Page pageNumber={pageNumber} />
                </Document>
                <p>
                    Page {pageNumber} of {numPages}
                </p>

            </div>

        </>
    )
}

export default CVPage