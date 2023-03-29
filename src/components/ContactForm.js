import { Button, Label, Col, FormGroup } from "reactstrap";
import { Formik, Field, Form } from "formik";

const ContactForm = () => {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        phoneNum: "",
        email: "",
        agree: false,
        contactType: "By Phone",
        feedback: "",
      }}
    >
      {({ values }) => (
        <Form>
          <FormGroup row>
            <Label htmlFor="firstName" md={2}>
              First Name
            </Label>
            <Col md={10}>
              <Field
                type="text"
                name="firstName"
                placeholder="First Name"
                value={values.firstName}
                className="form-control"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label htmlFor="lastName" md={2}>
              Last Name
            </Label>
            <Col md={10}>
              <Field
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={values.lastName}
                className="form-control"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label htmlFor="phoneNum" md={2}>
              Phone
            </Label>
            <Col md={10}>
              <Field
                type="tel"
                name="phoneNum"
                placeholder="Phone number"
                value={values.phoneNum}
                className="form-control"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label htmlFor="email" md={2}>
              Email
            </Label>
            <Col md={10}>
              <Field
                type="email"
                name="email"
                placeholder="Email"
                value={values.email}
                className="form-control"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label check md={{ size: 4, offset: 2 }}>
              <Field
                name="agree"
                type="checkbox"
                className="form-check-input"
              />{" "}
              May we contact you?
            </Label>
          </FormGroup>
          <FormGroup row>
            <Label htmlFor="feedback" md={2}>
              Your Feedback
            </Label>
            <Col md={10}>
              <Field
                type="textarea"
                name="feedback"
                rows="12"
                value={values.feedback}
                className="form-control"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col md={{ size: 10, offset: 2 }}>
              <Button type="submit" color="primary">
                Send Feedback
              </Button>
            </Col>
          </FormGroup>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
