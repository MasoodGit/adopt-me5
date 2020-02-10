import React from "react";
import pet from "@frontendmasters/pet";
import { navigate } from "@reach/router";
import Carousel from "./Carousel";
import Modal from "./Modal";

class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true, showModal: false };
    this.toggleModal = this.toggleModal.bind(this);
    this.adopt = this.adopt.bind(this);
  }

  componentDidMount() {
    pet
      .animal(+this.props.id)
      .then(({ animal }) => {
        this.setState({
          url: animal.url,
          name: animal.name,
          animal: animal.type,
          description: animal.description,
          media: animal.photos,
          breed: animal.breeds.primary,
          loading: false,
          location: `${animal.contact.address.city}, ${animal.contact.address.state}`
        });
      })
      .catch(err => this.setState({ error: err }));
  }

  toggleModal() {
    this.setState({
      showModal: !this.state.showModal
    });
  }

  adopt() {
    navigate(this.state.url);
  }
  render() {
    if (this.state.loading) {
      return <h1>is loading...</h1>;
    }
    const {
      animal,
      breed,
      location,
      description,
      media,
      name,
      url,
      showModal
    } = this.state;
    return (
      <div className="details">
        <Carousel media={media} />
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} - ${breed} -${location}`}</h2>
          <button onClick={this.toggleModal}>Adopt Me</button>
          <p>{description}</p>
        </div>
        {showModal ? (
          <Modal>
            <div>
              <h1>Would you like to adopt {name} </h1>
              <div className="buttons">
                <button onClick={this.adopt}>Yes</button>
                <button onClick={this.toggleModal}>No</button>
              </div>
            </div>
          </Modal>
        ) : null}
      </div>
    );
  }
}
export default Details;
