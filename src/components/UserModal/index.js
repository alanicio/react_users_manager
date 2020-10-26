import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  Button,
  ButtonSection,
  InputFile,
  Modal,
  ModalContent,
  Photo,
  RoundedSwitch,
} from "./styled";

const emptyUser = {
  picture: "",
  name: "",
  fathersLastName: "",
  mothersLastName: "",
  email: "",
  roleId: "",
  active: false,
};

const UserModal = ({
  roles,
  displayModal,
  setDisplayModal,
  userData = emptyUser,
  addUser,
  updateUser,
}) => {
  const [user, setUser] = useState(userData);

  useEffect(() => {
    setUser(userData);
  }, [userData]);

  const {
    picture,
    name,
    fathersLastName,
    mothersLastName,
    email,
    roleId,
    active,
  } = user;

  const updateForm = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const closeModal = () => {
    setUser(emptyUser);
    setDisplayModal(false);
  };

  const submitUser = (e) => {
    e.preventDefault();

    if (
      picture.trim() === "" ||
      name.trim() === "" ||
      fathersLastName.trim() === "" ||
      mothersLastName.trim() === "" ||
      email.trim() === "" ||
      roleId === ""
    ) {
      return;
    }

    if (user.id) {
      updateUser(user);
    } else {
      addUser(user);
    }
    setUser(emptyUser);
    setDisplayModal(false);
  };

  return (
    <Modal displayModal={displayModal}>
      <ModalContent>
        <h2>Agregar nuevo usuario</h2>
        <form onSubmit={submitUser}>
          <Photo photo={picture}></Photo>
          <InputFile>
            <label> JPG,PNG | Tamaño minimo de 300px × 300px</label>
            <label htmlFor="file-upload">Subir Foto</label>
            <input
              id="file-upload"
              type="file"
              onChange={(e) =>
                setUser({
                  ...user,
                  picture: URL.createObjectURL(e.target.files[0]),
                })
              }
            />
          </InputFile>
          <h4>Información básica</h4>
          <input
            type="text"
            placeholder="Nombre"
            name="name"
            value={name}
            onChange={updateForm}
          />
          <input
            type="text"
            placeholder="Apellido Paterno"
            name="fathersLastName"
            value={fathersLastName}
            onChange={updateForm}
          />
          <input
            type="text"
            placeholder="Apellido Materno"
            name="mothersLastName"
            value={mothersLastName}
            onChange={updateForm}
          />
          <input
            type="text"
            placeholder="Correo electrónico"
            name="email"
            value={email}
            onChange={updateForm}
          />
          <select name="roleId" value={roleId} onChange={updateForm}>
            <option value="">Rol</option>
            {roles.map(({ id, position }) => (
              <option key={id} value={id}>
                {position}
              </option>
            ))}
          </select>
          <RoundedSwitch>
            <input
              type="checkbox"
              checked={active}
              onChange={(e) => setUser({ ...user, active: !active })}
            />
            <span></span>
          </RoundedSwitch>
          <hr />
          <ButtonSection>
            <Button type="button" onClick={closeModal}>
              Cancelar
            </Button>
            <Button type="submit" withBackground={true}>
              Guardar Usuario
            </Button>
          </ButtonSection>
        </form>
      </ModalContent>
    </Modal>
  );
};

UserModal.propTypes = {
  roles: PropTypes.array.isRequired,
  displayModal: PropTypes.bool.isRequired,
  setDisplayModal: PropTypes.func.isRequired,
  userData: PropTypes.object,
  addUser: PropTypes.func.isRequired,
};

export default UserModal;
