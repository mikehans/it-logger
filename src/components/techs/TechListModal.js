import React, { useEffect } from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import TechItem from "./TechItem";
import { getTechs } from "../../actions/techsActions";

const TechListModal = ({ technicianList, getTechs }) => {
    const { techs, loading } = technicianList;

    useEffect(() => {
        getTechs();
        //eslint-disable-next-line
    }, [])

    return (
        <div id="tech-list-modal" className="modal">
            <div className="modal-content">
                <h4>Technician List</h4>
                <ul className="collection">
                    {!loading && techs && techs.map(tech => {
                        return <TechItem tech={tech} key={tech.id} />
                    })}
                </ul>
            </div>
        </div>
    )
}

TechListModal.propTypes = {
    techs: PropTypes.object,
    getTechs: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
    technicianList: state.techs
});

export default connect(mapStateToProps, { getTechs })(TechListModal);