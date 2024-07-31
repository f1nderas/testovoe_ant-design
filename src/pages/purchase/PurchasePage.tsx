import { Button, Form, Input } from "antd";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

interface IFormValues {
  name: string;
  address: string;
  email: string;
}
const PurchasePage: FC = () => {
  const navigate = useNavigate();

  const onFinish = (values: IFormValues) => {
    console.log("Success:", values);
    navigate("/thank-you");
  };

  return (
    <>
      <Form onFinish={onFinish}>
        <Form.Item
          name="name"
          label="Name"
          rules={[{ required: true, message: "Введите ваше имя" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="address"
          label="Address"
          rules={[{ required: true, message: "Введите ваш адрес" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="email"
          label="Email"
          rules={[
            { required: true, type: "email", message: "Введите вашу почту" },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Купить
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default PurchasePage;
