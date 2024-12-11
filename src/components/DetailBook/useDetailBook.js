import { useParams, useRouter } from "next/navigation";

const { useState, useEffect } = require("react");
const fakeData = [
  {
    id: 1,
    title: "Item 1",
    code_id: "12345",
    active: true,
    children: [
      {
        id: 11,
        title: "Sub-item 1.1",
        code_id: "12345-1",
        active: false,
        children: [],
      },
      {
        id: 12,
        title: "Sub-item 1.2",
        code_id: "12345-2",
        active: true,
        children: [],
      },
    ],
  },
  {
    id: 2,
    title: "Item 2",
    code_id: "67890",
    active: false,
    children: [
      {
        id: 21,
        title: "Sub-item 2.1",
        code_id: "67890-1",
        active: true,
        children: [],
      },
    ],
  },
  {
    id: 3,
    title: "Item 3",
    code_id: "11111",
    active: true,
    children: [],
  },
];

const fakeDataBook = {
  id: 1,
  urlImg: "https://via.placeholder.com/150",
  bookName: "React for Beginners",
  userAuthor: "John Doe",
  tagName: "Programming",
  startNum: 4.5,
  expireDate: "2024-12-31",
};

const useDetailBook = () => {
  const [sections, setSections] = useState([]);
  const [book, setBook] = useState({});
  const router = useRouter();
  const { id } = useParams();

  useEffect(() => {
    setSections(fakeData);
    setBook(fakeDataBook);
  }, []);

  const onClickSection = (sectionId) => {
    router.push(`/active-book/${id}/section?type=DE&sectionId=${sectionId}`);
  };

  return {
    sections,
    book,
    onClickSection,
  };
};

export default useDetailBook;
