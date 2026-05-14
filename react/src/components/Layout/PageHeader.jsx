function PageHeader({ title, subtitle }) {
  return (
    <div className="page-header">
      <div className="page-header-text">
        <h1 className="page-title">{title}</h1>
        <p className="page-subtitle">{subtitle}</p>
      </div>
    </div>
  );
}

export default PageHeader;
