import React from 'react'
import ContentFooter from '../ContentFooter';
import List from './List';

function Content() {
    return (
        <div>
            <>
                <section className="main">
                    <input className="toggle-all" type="checkbox" />
                    <label htmlFor="toggle-all">
                        Mark all as complete
                    </label>

                    <List />
                </section>
            </>
            <ContentFooter />
        </div>
    )
}

export default Content;