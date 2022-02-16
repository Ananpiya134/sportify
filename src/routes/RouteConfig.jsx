import HomeLogin from "../components/HomeLogin";

return (
  <Routes>
    {user ? (
      <Route path="/" element={<PublicLayout />}>
        <Route path="" element={<HomeLogin />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    ) : (
      <Route path="/" element={<PublicLayout />}>
        <Route path="login" element={<LoginForm />} />
        <Route path="register" element={<RegisterForm />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    )}
  </Routes>
);
