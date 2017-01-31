import BookTile from './BookTile';
import styles from './BookTile.css';
import test from 'tape';
import { shallow } from 'enzyme';


test('<BookTile> shallow testing', t => {

    t.ok(styles.container, 'it is importing classNames');

    t.ok(
        shallow( <BookTile /> ).hasClass( styles.container ),
        'it appends the classnames'
    );

    t.end();
});
