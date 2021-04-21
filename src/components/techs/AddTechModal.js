import React, { useState } from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { addTech } from "../../actions/techsActions";
import M from "materialize-css/dist/js/materialize.min.js";

const AddTechModal = ({ addTech }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const onSubmit = (e) => {
        if (firstName === '' || lastName === '') {
            M.toast({ html: 'Please enter a first name and last name' });
        } else {
            const newTech = {
                firstName,
                lastName
            };

            addTech(newTech);
            M.toast({html: `Tech added`});

            // clear fields
            setFirstName('');
            setLastName('');
        }
    }

    return (
        <div id="add-tech-modal" className="modal">
            <div className="modal-content">
                <h4>New Technician</h4>
                <div className="row">
                    <div className="input-field">
                        <input
                            type="text"
                            name="firstName"
                            value={firstName}
                            onChange={e => setFirstName(e.target.value)}
                        />

                        <label htmlFor="firstName" className="active">First Name</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <input
                            type="text"
                            name="lastName"
                            value={lastName}
                            onChange={e => setLastName(e.target.value)}
                        />

                        <label htmlFor="lastName" className="active">Last Name</label>
                    </div>
                </div>
            </div>
            <div className="modal-footer">
                <a href="#" className="modal-close waves-effect waves-light btn" onClick={onSubmit}>Enter</a>
            </div>
        </div>
    )
}

AddTechModal.propTypes = {
    addTech: PropTypes.func.isRequired
};

export default connect(null, { addTech })(AddTechModal);