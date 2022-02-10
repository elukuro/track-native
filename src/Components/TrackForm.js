import React from "react";
import { Input, Button } from "react-native-elements";
import Spacer from "./Spacer";
const TrackForm = () => {
  return (
    <>
      <Input placeholder="enter name" />
      <Button title="Start recording" />
    </>
  );
};

export default TrackForm;
