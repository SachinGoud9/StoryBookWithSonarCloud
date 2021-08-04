import { render, screen, cleanup } from '@testing-library/react';
import HorizontalLinearStepper from './CustomStepper';





describe('Typography Rendered', () => {
    test('maindivincustomstepper', () => {
      render(<HorizontalLinearStepper steps= {['Your Location', 'Job Location', 'Your Skills']}/>);
      const element = screen.getByTestId('maindivincustomstepper')
      expect(element).toBeTruthy();
    });
    test('stepperincustomstepper', () => {
      render(<HorizontalLinearStepper steps= {['Your Location', 'Job Location', 'Your Skills']}/>);
      const element = screen.getByTestId('stepperincustomstepper')
      expect(element).toBeTruthy();
    });
    // test('stepincustomstepper', () => {
    //   render(<HorizontalLinearStepper steps= {['Your Location', 'Job Location', 'Your Skills']}/>);
    //   const element = screen.getByTestId('stepincustomstepper')
    //   expect(element).toBeTruthy();
    // });
    // test('steplabelincustomstepper', () => {
    //   render(<HorizontalLinearStepper steps= {['Your Location', 'Job Location', 'Your Skills']}/>);
    //   const element = screen.getByTestId('steplabelincustomstepper')
    //   expect(element).toBeTruthy();
    // });
    test('div2customstepper', () => {
      render(<HorizontalLinearStepper steps= {['Your Location', 'Job Location', 'Your Skills']}/>);
      const element = screen.getByTestId('div2customstepper')
      expect(element).toBeTruthy();
    });
    // test('div3incustomstepper', () => {
    //   render(<HorizontalLinearStepper steps= {['Your Location', 'Job Location', 'Your Skills']}/>);
    //   const element = screen.getByTestId('div3incustomstepper')
    //   expect(element).toBeTruthy();
    // });
    // test('stepstypoincustomstepper', () => {
    //   render(<HorizontalLinearStepper steps= {['Your Location', 'Job Location', 'Your Skills']}/>);
    //   const element = screen.getByTestId('stepstypoincustomstepper')
    //   expect(element).toBeTruthy();
    // });
    // test('resetbuttonincustomstepper', () => {
    //   render(<HorizontalLinearStepper steps= {['Your Location', 'Job Location', 'Your Skills']}/>);
    //   const element = screen.getByTestId('resetbuttonincustomstepper')
    //   expect(element).toBeTruthy();
    // });
    // test('div4incustomstepper', () => {
    //   render(<HorizontalLinearStepper steps= {['Your Location', 'Job Location', 'Your Skills']}/>);
    //   const element = screen.getByTestId('div4incustomstepper')
    //   expect(element).toBeTruthy();
    // });
    // test('backbuttonincustomstepper', () => {
    //   render(<HorizontalLinearStepper steps= {['Your Location', 'Job Location', 'Your Skills']}/>);
    //   const element = screen.getByTestId('backbuttonincustomstepper')
    //   expect(element).toBeTruthy();
    // });
    // test('skipincustomstepper', () => {
    //   render(<HorizontalLinearStepper steps= {['Your Location', 'Job Location', 'Your Skills']}/>);
    //   const element = screen.getByTestId('skipincustomstepper')
    //   expect(element).toBeTruthy();
    // });
    // test('finishincustomstepper', () => {
    //   render(<HorizontalLinearStepper steps= {['Your Location', 'Job Location', 'Your Skills']}/>);
    //   const element = screen.getByTestId('finishincustomstepper')
    //   expect(element).toBeTruthy();
    // });
  });