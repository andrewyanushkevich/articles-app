import React, { Component } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { Title, Body, Submit } from './styles';
import PropTypes from 'prop-types';
import * as Yup from 'yup';

const SubmitSchema = Yup.object().shape({
  title: Yup.string()
    .required('Title is required'),
  body: Yup.string()
    .required('Body is required'),
  });

class ArticleForm extends Component {
  handleSubmit = (values, {resetForm}) => {
    const { id, closeForm } = this.props;
    let submit;
    if(typeof id === 'undefined') {
      submit = this.props.handleAddArticle;
    } else {
      submit = this.props.handleEditArticle;
    }
    const article = {
      title: values.title,
      body: values.body,
      id,
    };
    submit(article);
    resetForm({title: '', body: ''});
    closeForm();
  };

  render() {
    const { title, body, formButtonName } = this.props;
    return(
      <Formik
      initialValues={{
          title,
          body,
      }}
      validationSchema={SubmitSchema}
      onSubmit={this.handleSubmit}
      render={() => {
        return (
          <Form>
            <Title>
              <div>
                Title:
              </div>
              <Field component="input" name="title" />
              <ErrorMessage name="title">
                {errorMessage => <div>{errorMessage}</div>}
              </ErrorMessage>
            </Title>
              <Body>
                <div>
                  Body:
                </div>
                <Field component="textarea" name="body" />
                <ErrorMessage name="body">
                  {errorMessage => <div>{errorMessage}</div>}
                </ErrorMessage>
              </Body>
              <Submit>
                <button type="submit">
                  {formButtonName}
                </button>
              </Submit>
          </Form>
        )
        }}
        />
    )
  }
}

ArticleForm.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  handleAddArticle: PropTypes.func,
  handleEditArticle: PropTypes.func,
}

export default ArticleForm;
