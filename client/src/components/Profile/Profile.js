import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Button } from '../Button/Button';
import { Modal } from '../Modal/Modal';
import { Input } from '../Input/Input';
import { Card } from '../Card/Card';

import { addNewProperty, fetchAllProperties } from '../../actions/property';

const Profile = () => {
  const dispatch = useDispatch();
  const propertyList = useSelector((state) => state.property.propertyList);
  const currentUser = useSelector((state) => state.auth.currentUser);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({
    title: '',
    address: {
      lineOne: '',
      lineTwo: '',
      city: '',
      postcode: '',
    },
    propertyType: '',
  });

  useEffect(() => {
    console.log();
    dispatch(fetchAllProperties(currentUser.uid));
    console.log(currentUser);
  }, [currentUser.uid, dispatch, currentUser]);

  const handleSubmit = () => {
    console.log(form);
    dispatch(addNewProperty(form, currentUser.uid));
    setForm({
      title: '',
      address: {
        lineOne: '',
        lineTwo: '',
        city: '',
        postcode: '',
      },
      propertyType: '',
    });
    setShowModal(!showModal);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes('address')) {
      let newName = name.split('.')[1];
      let { address } = form;
      address[newName] = value;
      return setForm({
        ...form,
        address,
      });
    }
    setForm({ ...form, [name]: value });
  };

  const handleModalChange = () => {
    setShowModal(!showModal);
  };

  if (Object.keys(currentUser).length === 0) {
    return null;
  }

  return (
    <div>
      <h2>Hi, {currentUser.email}!</h2>
      <Button onClick={() => handleModalChange()}>Add Property</Button>
      {propertyList.length > 0 && (
        <div className="container--grid">
          {propertyList.map((item) => (
            <Card key={item.id}>
              <h3>{item.title}</h3>
              <div>{item.address?.lineTwo}</div>
              <div>{item.address?.city}</div>
              <div>Units: {item.units?.length}</div>
              <div>Type: {item.propertyType}</div>
            </Card>
          ))}
        </div>
      )}
      {showModal && (
        <Modal handleClose={(e) => handleModalChange(e)}>
          <h2>Add a property</h2>
          <Input type="text" placeholder="Title" value={form.title} name={'title'} onChange={(e) => handleChange(e)} />
          <Input
            type="text"
            placeholder="Line One"
            value={form.address.lineOne}
            name={'address.lineOne'}
            onChange={(e) => handleChange(e)}
          />
          <Input
            type="text"
            placeholder="Line Two"
            value={form.address.lineTwo}
            name={'address.lineTwo'}
            onChange={(e) => handleChange(e)}
          />
          <Input
            type="text"
            placeholder="City"
            value={form.address.city}
            name={'address.city'}
            onChange={(e) => handleChange(e)}
          />
          <Input
            type="text"
            placeholder="Postcode"
            value={form.address.postcode}
            name={'address.postcode'}
            onChange={(e) => handleChange(e)}
          />
          <Input
            type="text"
            placeholder="Type"
            value={form.propertyType}
            name={'propertyType'}
            onChange={(e) => handleChange(e)}
          />
          <Button size="fluid" onClick={() => handleSubmit()}>
            Submit
          </Button>
        </Modal>
      )}
    </div>
  );
};

export default Profile;
