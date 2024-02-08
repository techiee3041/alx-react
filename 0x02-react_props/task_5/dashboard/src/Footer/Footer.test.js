import React from "react";
import { Footer } from "./Footer";
import { shallow } from "enzyme";
import { getFooterCopy, getFullYear } from "../utils/utils";

describe("Footer", () => {
  it("renders without crashing", () => {
    const footerComponent = shallow(<Footer />);
    expect(footerComponent).toBeDefined();
  });

  it('has text "copyright"', () => {
    const footerComponent = shallow(<Footer />);
    expect(footerComponent.find(".App-footer").text()).toEquals(
      `Copyright ${getFullYear()} - ${getFooterCopy(true)}`
    );
  });
});
