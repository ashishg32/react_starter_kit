import React from 'react';
import PropTypes from 'prop-types';
import {
    Table,
    Modal
} from 'react-bootstrap';

const Actor = (props) => {
    const { actor, hideFn } = props;
    const showModal = actor.name ? true : false;
    if (!actor.name) {
        return <div />
    }
    return (
        <Modal show={showModal} onHide={hideFn}>
            <Modal.Header closeButton>
                <Modal.Title>Actor Details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Table responsive>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Gender</th>
                            <th>Birth Year</th>
                            <th>Films</th>
                            <th>Species</th>
                            <th>Vehicles</th>
                            <th>Star Ships</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{actor.name}</td>
                            <td>{actor.gender}</td>
                            <td>{actor.birth_year}</td>
                            <td>{actor.films.length}</td>
                            <td>{actor.vehicles.length}</td>
                            <td>{actor.starships.length}</td>
                        </tr>
                    </tbody>
                </Table>
            </Modal.Body>
        </Modal>
    )
};

Actor.propTypes = {
    actor: PropTypes.object,
    hideFn: PropTypes.func.isRequired
}

Actor.defaultProps = {
    actor: {
        name: '',
        gender: '',
        birth_year: '',
        films: [],
        vehicles: [],
        starships: []
    }
}

export default Actor;