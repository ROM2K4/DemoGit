import { Button, Form, Image, Input, Modal, Select, Table, Upload } from "antd";
import TextArea from "antd/es/input/TextArea";
import axios from "axios";

import { useEffect, useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { useForm } from "antd/es/form/Form";
import uploadFile from "../../utils/upload";

function MoviesManagement() {
  
  const [form] = useForm();
  const [dataSource, setDataSource] = useState([]);
  const columns = [
    {
      title: "Movie name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Poster",
      dataIndex: "poster_path",
      key: "poster_path",
      render: (poster_path) => <Image src={poster_path} width={150} />,
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
    },
  ];

  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [fileList, setFileList] = useState([]);

  const getBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
  };
  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);
  const uploadButton = (
    <button
      style={{
        border: 0,
        background: "none",
      }}
      type="button"
    >
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </button>
  );

  async function fetchMovie() {
    const response = await axios.get(
      "https://66df1a7ede4426916ee393cf.mockapi.io/api/v1/Movie"
    );
    setDataSource(response.data);
  }
  useEffect(() => {
    fetchMovie();
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);
  function handleOpen() {
    setIsModalOpen(true);
  }
  function handleClose() {
    setIsModalOpen(false);
  }
  async function handleSubmit(values) {
    console.log(values);
    console.log(values.poster_path.file.originFileObj);
    const url = await uploadFile(values.poster_path.file.originFileObj);
    values.poster_path = url;
    console.log(values);

    // eslint-disable-next-line no-unused-vars
    const response = await axios.post(
      "https://66df1a7ede4426916ee393cf.mockapi.io/api/v1/Movie",
      values
    );
    setDataSource([...dataSource, values]);

    //clear form after submit
    form.resetFields;

    //close Modal
    handleClose();
  }
  function handleOk() {
    form.submit();
  }

  return (
    <div>
      <Button type="primary" onClick={handleOpen}>
        Add new movie
      </Button>

      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onCancel={handleClose}
        onOk={handleOk}
      >
        <Form onFinish={handleSubmit} form={form} labelCol={{ span: 24 }}>
          <Form.Item label="Movie name" name={"name"}>
            <Input type="text" placeholder="Movie name" />
          </Form.Item>

          <Form.Item label="Description" name={"description"}>
            <TextArea rows={4} placeholder="Description" />
          </Form.Item>

          <Form.Item label="Trailer" name={"trailer"}>
            <Input placeholder="Link url" />
          </Form.Item>

          <Form.Item label="Category" name={"category"}>
            <Select placeholder="Select a category">
              <Select.Option value="Action">Action</Select.Option>
              <Select.Option value="Drama">Drama</Select.Option>
              <Select.Option value="Comedy">Comedy</Select.Option>
              <Select.Option value="Trending">Trending</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item label="Poster" name={"poster_path"}>
            <Upload
              action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
              listType="picture-card"
              fileList={fileList}
              onPreview={handlePreview}
              onChange={handleChange}
            >
              {fileList.length >= 8 ? null : uploadButton}
            </Upload>
          </Form.Item>
        </Form>
      </Modal>

      {previewImage && (
        <Image
          wrapperStyle={{
            display: "none",
          }}
          preview={{
            visible: previewOpen,
            onVisibleChange: (visible) => setPreviewOpen(visible),
            afterOpenChange: (visible) => !visible && setPreviewImage(""),
          }}
          src={previewImage}
        />
      )}

      <Table dataSource={dataSource} columns={columns} />
    </div>
  );
}

export default MoviesManagement;
