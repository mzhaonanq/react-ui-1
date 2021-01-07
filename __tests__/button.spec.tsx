import {Button} from '../src/Components/Button';
import * as renderer from 'react-test-renderer'
import * as React from 'react';
describe("number test", ()=>{
  it('1 is true', ()=>{
    expect(1).toBeTruthy()
  })
  test('0 is false',()=>{
    expect(0).toBeFalsy()
  })
  test("button is div",()=>{
    const json =renderer.create(<Button/>).toJSON()
    expect(json).toMatchSnapshot()
  })
})