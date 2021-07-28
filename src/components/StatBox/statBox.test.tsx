import { render, cleanup } from '@testing-library/react';
import StatBox, { IStatBox } from './StatBox';

afterEach(cleanup);


describe("<StatBox/>", () => {
  it('renders the StatBox with the correct title, type and value', () => {
    const statBoxParam:IStatBox = {
        title: "Countries in the world",
        type: "informational",
        value: 195
    };

    const {getByTestId, getByText, container} = render(<StatBox {...statBoxParam} />);

    expect(getByText(statBoxParam.title)).toBeInTheDocument();
    expect(getByText(statBoxParam.value)).toBeInTheDocument();
    expect(container.querySelector(".informational")).toBeTruthy();
  });
});


