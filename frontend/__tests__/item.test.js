import ItemComponent from '../components/Item'
import { shallow, mount } from 'enzyme'
import toJSON from 'enzyme-to-json'

const fakeItem = {
  id: 'ABC123',
  title: 'A Cool Item',
  price: 4000,
  description: 'This item is really cool!',
  image: 'dog.jpg',
  largeImage: 'largedog.jpg'
}

describe("<Item />", () => {
  it("renders and matches the snapshot", () => {
    // const price = '$50.35'
    // expect(price).toMatchSnapshot();
    const wrapper = shallow(<ItemComponent item={fakeItem} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
  // it("renders the image properly", () => {
  //   const wrapper = shallow(<ItemComponent item={fakeItem} />)
  //   const img = wrapper.find('img')
  //   // console.log(img.props());
  //   expect(img.props().src).toBe(fakeItem.image);
  //   expect(img.props().alt).toBe(fakeItem.title);
  // });
  //
  // it('renders the pricetag and title', () => {
  //   const wrapper = shallow(<ItemComponent item={fakeItem} />)
  //   const PriceTag = wrapper.find('PriceTag')
  //   // console.log(wrapper.debug());
  //   // console.log(PriceTag.dive().text());
  //   // console.log(PriceTag.children().text());
  //   expect(PriceTag.children().text()).toBe('$50')
  //   expect(wrapper.find('Title a').text()).toBe(fakeItem.title);
  // })
  //
  // it("renders out the buttons properly", () => {
  //   const wrapper = shallow(<ItemComponent item={fakeItem} />);
  //   // console.log(wrapper.debug());
  //   const buttonList = wrapper.find('.buttonList')
  //   // console.log(buttonList.debug());
  //   expect(buttonList.children()).toHaveLength(3);
  //   // console.log(buttonList.children());
  //   expect(buttonList.find('Link')).toHaveLength(1)
  //   expect(buttonList.find('Link').exists()).toBe(true)
  //   expect(buttonList.find('AddToCart').exists()).toBe(true)
  //   expect(buttonList.find('DeleteItem').exists()).toBe(true)
  // });
});
