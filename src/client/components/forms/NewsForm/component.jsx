import React, { Component } from 'react';
import {
  Formik, Field, Form, ErrorMessage,
} from 'formik';
import PropTypes from 'prop-types';
import * as Yup from 'yup';

import * as fields from 'client/constants';

import { Title, Body, Input, TextArea } from './styles';

const SubmitSchema = Yup.object().shape({
  title: Yup.string()
    .required('Title is required'),
  detailedDescription: Yup.string()
    .required('Description is required'),
});

class NewsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
    };
  }

  handleSubmit = (values, { resetForm }) => {
    const { id, closeForm, handleAddArticle, handleEditArticle } = this.props;
    const { images } = this.state;
    const submit = id ? handleAddArticle : handleEditArticle;
    const article = {
      title: values.title,
      detailedDescription: values.detailedDescription,
      id,
      images,
    };
    submit(article);
    if (typeof id === 'undefined') {
      resetForm({ title: '', detailedDescription: '', images: [] });
    }
    closeForm();
  }

  handleFilesUpload = (event) => {
    this.setState({
      images: event.target.files,
    });
  }

  handleErrorMessage = (errorMessage) => {
    return <div>{errorMessage}</div>;
  }

  render() {
    const { title, detailedDescription } = this.props;
    return (
      <Formik
        initialValues={{
          title,
          detailedDescription,
        }}
        validationSchema={SubmitSchema}
        onSubmit={this.handleSubmit}
        render={() => (
          <Form id="newsForm">
            <Title>
              <p>
                Title:
              </p>
              <Field
                name={fields.TITLE_FIELD}
                render={({ field }) => (
                  <Input {...field} />
                )}
              />
              <ErrorMessage name={fields.TITLE_FIELD}>
                {errorMessage => (errorMessage ? <div>{errorMessage}</div> : null)}
              </ErrorMessage>
            </Title>
            <Body>
              <p>
                Description:
              </p>
              <Field
                name={fields.DETAILED_DESCRIPTION_FIELD}
                render={( { field } ) => (
                  <TextArea {...field} name={fields.DETAILED_DESCRIPTION_FIELD} />
                )}
              />
              <ErrorMessage name={fields.DETAILED_DESCRIPTION_FIELD}>
                {errorMessage => (errorMessage ? <div>{errorMessage}</div> : null)}
              </ErrorMessage>
            </Body>
            <Field
              name={fields.IMAGES_FIELD}
              component="input"
              type="file"
              multiple
              onChange={this.handleFilesUpload}
            />
          </Form>
        )}
      />
    );
  }
}

NewsForm.propTypes = {
  title: PropTypes.string,
  detailedDescription: PropTypes.string,
  handleAddArticle: PropTypes.func,
  handleEditArticle: PropTypes.func,
};

export default NewsForm;
