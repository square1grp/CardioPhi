import React, {useState} from 'react';
import { useDispatch } from 'react-redux';

import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';

import CustomSelect from 'components/atoms/CustomSelect';
import CustomInput from 'components/atoms/CustomInput';

import { CgClose } from 'react-icons/cg';

/**
 * Time Stats Component
 * @returns
 */
const EpisodeChart = (props) => {

  const [show, setShow] = useState(props.show);

  const handleClose = () => setShow(false);

  const dispatch = useDispatch();

  return (
    <>
    <Offcanvas show={show} placement="end" onHide={handleClose}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Offcanvas</Offcanvas.Title>
      </Offcanvas.Header>
    </Offcanvas>
    </>
  );
};

export default EpisodeChart;
