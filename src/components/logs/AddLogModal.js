import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import M from "materialize-css/dist/js/materialize.min.js";
import PropTypes from 'prop-types';
import { addLog } from '../../actions/logActions'
import { getTechs } from "../../actions/techsActions";

const AddLogModal = ({ technicianList, addLog, getTechs }) => {
    const [message, setMessage] = useState('');
    const [attention, setAttention] = useState(false);
    const [tech, setTech] = useState('');

    const { techs, loading } = technicianList;

    useEffect(() => {
        getTechs();
        //eslint-disable-next-line
    }, []);

    const onSubmit = (e) => {
        if (message === '' || tech === '') {
            M.toast({ html: 'Please enter a message and tech' });
        } else {
            const newLog = {
                message,
                attention,
                tech,
                date: new Date()
            };

            addLog(newLog);
            M.toast({ html: `Log added by ${tech}` });
            // clear fields
            setMessage('');
            setTech('');
            setAttention(false);
        }
    }

    return (
        <div id="add-log-modal" className="modal" style={modalStyle}>
            <div className="modal-content">
                <h4>Enter System Log</h4>
                <div className="row">
                    <div className="input-field">
                        <input
                            type="text"
                            name="message"
                            value={message}
                            onChange={e => setMessage(e.target.value)}
                        />

                        <label htmlFor="message" className="active">Log Message</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <select
                            name="tech"
                            value={tech}
                            className="browser-default"
                            onChange={e => setTech(e.target.value)}
                        >
                            <option value="" disabled>Select Technician</option>
                            {!loading && techs && techs.map(t => {
                                return (<option value={`${t.firstName} ${t.lastName}`} key={t.id}>
                                            {`${t.firstName} ${t.lastName}`}
                                        </option>)
                            })}
                            {/* <option value="John Doe">John Doe</option>
                            <option value="Sam Smith">Sam Smith</option>
                            <option value="Billy The-Kid">Billy The-Kid</option> */}
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <p>
                            <label>
                                <input
                                    type="checkbox"
                                    className="filled-in"
                                    checked={attention}
                                    value={attention}
                                    onChange={e => setAttention(!attention)}
                                />
                                <span>Needs Attention</span>
                            </label>
                        </p>
                    </div>
                </div>
            </div>
            <div className="modal-footer">
                <a href="#" className="modal-close waves-effect waves-light btn" onClick={onSubmit}>Enter</a>
            </div>
        </div>
    )
}

const modalStyle = {
    width: '75%',
    height: '75%'
};

AddLogModal.propTypes = {
    technicianList: PropTypes.object,
    addLog: PropTypes.func.isRequired,
    getTechs: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    technicianList: state.techs
});

export default connect(mapStateToProps, { addLog, getTechs })(AddLogModal);
