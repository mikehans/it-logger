import React from 'react'
import PropTypes from 'prop-types'
import Moment from "react-moment";

export const LogItem = ({log}) => {
    return (
        <li className="collection-item">
            <a href="#edit-log-modal" className={`modal-trigger ${log.attention? 'red-text': 'blue-text'}`}>{log.message}</a><br/>
            <span className="grey-text">
                <span className="black-text">ID # {log.id}</span> last updated by &nbsp;
                <span className="black-text">{log.tech}</span> on <Moment format="Do MMMM YYYY, h:mm:ss a">{log.date}</Moment>
            </span>
            <a className="secondary-content" href="#">
                <i className="material-icons grey-text">delete</i>
            </a>
        </li>
    )
}

LogItem.propTypes = {
    log: PropTypes.object.isRequired
}