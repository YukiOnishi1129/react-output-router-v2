import { NAVIGATION_LIST } from "../constants/navigation";
import { BrowserRouter, Routes, Route } from "react-router";
import {
  TodoCreatePage,
  TodoDetailPage,
  TodoEditPage,
  TodoListPage,
} from "../pages";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path={NAVIGATION_LIST.TOP} element={<TodoListPage />} />
        <Route path={NAVIGATION_LIST.DETAIL} element={<TodoDetailPage />} />
        <Route path={NAVIGATION_LIST.CREATE} element={<TodoCreatePage />} />
        <Route path={NAVIGATION_LIST.EDIT} element={<TodoEditPage />} />
      </Routes>
    </BrowserRouter>
  );
};

// export const router = createBrowserRouter([
//   {
//     path: NAVIGATION_LIST.TOP,
//     element: <TodoPage />,
//   },
//   {
//     path: NAVIGATION_LIST.DETAIL,
//     element: <TodoDetailPage />,
//   },
//   {
//     path: NAVIGATION_LIST.CREATE,
//     element: <TodoCreatePage />,
//   },
//   {
//     path: NAVIGATION_LIST.EDIT,
//     element: <TodoEditPage />,
//   },
// ]);
