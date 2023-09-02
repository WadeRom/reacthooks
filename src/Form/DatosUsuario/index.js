import React, { useState } from "react";
import { validateField } from "./validaciones";
import { TextField, Button, Box } from "@mui/material";

const DatosUsuario = () => {
  
  const [fields, setField] = useState({
    email: {
      value: '',
      validation: false
    },
    password: {
      value: '',
      validation: false
    }
  });

  const handlingFields = (e) => {
    const validation = validateField(e.target.name, e.target.value);
    setField({ 
      ...fields, 
      [e.target.name]:{
        value:e.target.value,
        validation:validation 
      } 
    })
  }

  const validationForm = (e) => {
    e.preventDefault();
  }

  return (
    <Box
      component="form"
      autocomplete="off"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
      onSubmit={validationForm}
    >
      <TextField
        name="email"
        label="Correo electrónico"
        variant="outlined"
        fullWidth
        margin="dense"
        type="email"
        error={fields.email.validation}
        helperText={fields.email.validation && "Ingresa un correo electrónico válido"}
        onChange={handlingFields}
        value={fields.email.value}
        required
      />
      <TextField
        name="password"
        label="Contraseña"
        variant="outlined"
        fullWidth
        margin="dense"
        type="password"
        onChange={handlingFields}
        value={fields.password.value}
        error={fields.password.validation}
        helperText={fields.password.validation && "Ingresa una contraseña valida"}
        required
      />
      <Button variant="contained" type="submit">
        Siguiente
      </Button>
    </Box>
  )
}
export default DatosUsuario;
