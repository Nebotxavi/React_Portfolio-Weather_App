import React from "react";
import ReactDOM from "react-dom";
import expect from "expect";
import renderer from "react-test-renderer";
import { configure, mount, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import App from "./App";
import Card from "./components/cards";
import Title from "./components/title";

import { getCities } from "./services/cityService";
import { getForecast } from "./services/getForecast";
import { getWeekday } from "./components/utils/getWeekday";
import { forecast } from "./services/testingData/mockForecast";

// Enzyme setup
configure({ adapter: new Adapter() });

// it("renders without crashing", () => {
//   const div = document.createElement("div");
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

// // SNAPSHOT TESTING

// describe("App", () => {
//   test("App main component renders (snapshot)", () => {
//     const component = renderer.create(<App />);
//     let tree = component.toJSON();
//     expect(tree).toMatchSnapshot();
//   });
// });

// describe("Card", () => {
//   test("Card component renders (snapshot)", () => {
//     const component = renderer.create(<Card forecast={forecast} />);
//     let tree = component.toJSON();
//     expect(tree).toMatchSnapshot();
//   });
// });

// // UNIT TESTING

// test("getWeekday util function", () => {
//   const today = new Date().toLocaleString("en-us", { weekday: "long" });
//   expect(getWeekday(0)).toBe("Today");
//   expect(getWeekday(7)).toBe(today);
// });

// describe("getCities", () => {
//   test("getCities services length", () => {
//     expect(getCities("a").length).toBeGreaterThan(5);
//   });
//   test("getCities services general case", () => {
//     const { name: cityName } = getCities("Murava")[0];
//     expect(cityName).toBe("Murava");
//   });
//   test("getCities services case-insensitive", () => {
//     const { name: cityName } = getCities("mURAVA")[0];
//     expect(cityName).toBe("Murava");
//   });
// });

// // AXIOS TESTING

// describe("getForecast", () => {
//   test("City fetch call should return 7 items", async () => {
//     const { id: cityID } = getCities("Benasal")[0];
//     return getForecast("/" + cityID).then(data => {
//       expect(data.data.length).toEqual(7);
//     });
//   });
//   test("City fetch call properties", async () => {
//     expect.assertions(2);
//     const { id: cityID } = getCities("Benasal")[0];
//     return getForecast("/" + cityID).then(data => {
//       expect(data.data[0]).toHaveProperty("max_temp");
//       expect(data.data[0]).toHaveProperty("min_temp");
//     });
//   });
// });

// ENZYME TESTING

describe("APP testing", () => {
  test("Renders the title", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Title)).toHaveLength(1);
  });
  test("Title content", () => {
    const wrapper = mount(<App />);
    const titleWrapper = wrapper.find(Title);

    expect(titleWrapper.find("h3").text()).toEqual(
      "Search for a city or town."
    );
  });
  test("input field render", () => {
    expect(
      mount(<App />)
        .find("input")
        .at(1)
        .exists()
    ).toBe(true);
  });
  test("input field should get updated", () => {
    const wrapper = mount(<App />);
    wrapper
      .find("input")
      .at(1)
      .simulate("change", { target: { name: "location", value: "benasal" } });
    console.log(wrapper.State);
  });
});

// const wrapper = mount(<App />);
// const wrapperInput = wrapper.find("input").at(1);
// // wrapperInput.simulate("focus");
// // wrapperInput.simulate("change", { target: { value: "Benasal" } });
// expect(wrapperInput.exists()).toBe(true);

//   const wrapper = mount(<App />);
//   console.log("cheeeeeeeeeeeeeeck");
//   console.log(wrapper.find("input"));
//   wrapper
//     .find("input")
//     .at(1)
//     .simulate("focus");
//   wrapper
//     .find("input")
//     .at(1)
//     .simulate("change", { target: { value: "Benasal" } });
//   wrapper
//     .find("input")
//     .at(1)
//     .simulate("keyDown", { which: 13 });
//   console.log(wrapper);
//   console.log(
//     wrapper
//       .find(Title)
//       .find("h3")
//       .text()
//   );
//   console.log(
//     wrapper
//       .find(".card-container")
//       .find(".card")
//       .find(".card-body")
//       .find(".card-title")
//       .text()
//   );
//   expect(wrapper.find(".card-container")).toEqual(1);
// });
