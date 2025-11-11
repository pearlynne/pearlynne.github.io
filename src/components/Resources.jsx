import { useState } from "react";
import styles from "../styles/resources.module.css";

const Resources = ({ labName, links, password }) => {
  const [input, setInput] = useState("");
  const [access, setAccess] = useState(!password); 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input === password) {
      setAccess(true);
    } else {
      alert("Incorrect password");
    }
  };

  return (
    <div className={styles.snapContainer}>
      <section>
				<h1 className={styles.title}>{labName} Resources</h1>
				{!access ? (
					<form onSubmit={handleSubmit} className={styles.passwordForm}>
						<input
							type="password"
							value={input}
							onChange={(e) => setInput(e.target.value)}
							placeholder="Password"
							required
							className={styles.input}
						/>
						<button type="submit" className={styles.button}>
							Access
						</button>
					</form>
				) : (
					<div className={styles.resources}>
						<ul className={styles.list}>
							{links.map((link) => (
								<li key={link.name} className={styles.item}>
									<a
										href={link.url}
										target="_blank"
										rel="noopener noreferrer"
									>
										{link.icon} {link.name}
									</a>
								</li>
							))}
						</ul>
					</div>
				)}
			</section>
    </div>
  );
};

export default Resources;
