const Text = ({children, error = false, className = ""}: {className?: string, children: any, error?: boolean}) => {

  return (
    <p className={`${className ? className : ""}${error ? " error-text" : " success-text"}`}>{children}</p>
  )
}

export default Text;