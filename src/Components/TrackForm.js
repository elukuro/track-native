import React, { useContext } from "react";
import { Input, Button } from "react-native-elements";
import Spacer from "./Spacer";
import { Context as LocationContext } from "../context/LocationContext";

const TrackForm = () => {
  const {
    state: { name, recording, locations },
    startRecording,
    stopRecording,
    changeName,
  } = useContext(LocationContext);

  return (
    <>
      <Spacer>
        <Input
          value={name}
          onChangeText={changeName}
          placeholder="enter name"
        />
        {recording ? (
          <Button title="Stop" onPress={stopRecording}></Button>
        ) : (
          <Button title="start recording" onPress={startRecording}></Button>
        )}
        <Spacer>
          {!recording && locations.length ? (
            <Button title="save recording"></Button>
          ) : null}
        </Spacer>
      </Spacer>
    </>
  );
};

export default TrackForm;
