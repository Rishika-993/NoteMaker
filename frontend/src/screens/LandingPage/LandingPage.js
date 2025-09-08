import { Button, Container, Row } from 'react-bootstrap';
import { motion } from 'framer-motion';
import './LandingPage.css';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { logout } from '../../actions/userActions';

export const LandingPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.userLogin);

  const logoutHandler = () => {
    dispatch(logout());
    localStorage.removeItem('userInfo');
    navigate('/');
  };

  // Animation configs
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    hover: { scale: 1.05, y: -3, transition: { duration: 0.2 } },
    tap: { scale: 0.98 },
  };

  return (
    <motion.div
      className="main"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Animated Background Layer */}
      <motion.div
        className="animated-bg-layer"
        animate={{
          background: [
            'radial-gradient(ellipse 1200px 600px at 20% 40%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)',
            'radial-gradient(ellipse 1200px 600px at 80% 60%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)',
            'radial-gradient(ellipse 1200px 600px at 40% 20%, rgba(147, 197, 253, 0.12) 0%, transparent 50%)',
          ],
        }}
        transition={{ duration: 8, ease: 'easeInOut', repeat: Infinity, repeatType: 'reverse' }}
      />

      <Container>
        <Row>
          <motion.section className="intro-text" variants={containerVariants}>
            <div>
              <motion.h1 className="title" variants={itemVariants}>
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  Welcome to
                </motion.span>
                <motion.span
                  className="gradient-text"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                >
                  Note Maker
                </motion.span>
              </motion.h1>

              <motion.p className="subtitle" variants={itemVariants}>
                One safe place for all your notes.
              </motion.p>
            </div>

            <motion.div className="buttonContainer" variants={containerVariants}>
              {!userInfo ? (
                <>
                  <Link to="/login">
                    <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                      <Button size="lg" className="landingbutton">Login</Button>
                    </motion.div>
                  </Link>

                  <Link to="/register">
                    <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                      <Button size="lg" className="landingbutton" variant="outline-primary">
                        Register
                      </Button>
                    </motion.div>
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/mynotes">
                    <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                      <Button size="lg" className="landingbutton">My Notes</Button>
                    </motion.div>
                  </Link>

                  <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                    <Button
                      size="lg"
                      className="landingbutton"
                      variant="outline-primary"
                      onClick={logoutHandler}
                    >
                      Logout
                    </Button>
                  </motion.div>
                </>
              )}
            </motion.div>
          </motion.section>
        </Row>
      </Container>
    </motion.div>
  );
};
