import { StyleSheet, ScrollView } from "react-native";
import React from "react";
import Information from "../../components/Information";

export default function CoursesInformationScreen() {
  return (
    <ScrollView>
      <Information
        title="Angular Eğitimi"
        imageSource={require("../../assets/angular.jpg")}
        desc="Kapsamlı Angular Eğitimi"
      />
      <Information
        title="C Eğitimi"
        imageSource={require("../../assets/c.png")}
        desc="Kapsamlı C Eğitimi"
      />
      <Information
        title="Bootstrap5 Eğitimi"
        imageSource={require("../../assets/bootstrap5.png")}
        desc="Kapsamlı Bootstrap5 Eğitimi"
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
