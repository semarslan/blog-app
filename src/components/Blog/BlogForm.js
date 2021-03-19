import React, {Component} from 'react';

class BlogForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            //hem update hem add için bu şekilde yazılır.
            title: props.blog ? props.blog.title : '',
            description: props.blog ? props.blog.description : '',
            error: ''
        }
    }

    onTitleChange = (e) => {
        const title = e.target.value
        this.setState(() => ({
            title
        }));
    }

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({
            description
        }))
    }
    onSubmit = (e) => {
        e.preventDefault();

        if (!this.state.title || !this.state.description) {
            this.setState({error: "lütfen tüm alanları doldurunuz"})
        } else {
            this.setState({error: ''})
            this.props.onSubmit({
                title: this.state.title,
                description: this.state.description,
                dateAdded: Date.now()
            })
        }
    }

    render() {
        const {error, title, description} = this.state;
        return (
            <div>
                {error && <p>{error}</p>}
                <form onSubmit={this.onSubmit}>
                    <div>
                        <input
                            placeholder={"enter title"}
                            value={title}
                            onChange={this.onTitleChange}
                        />
                    </div>
                    <div>
                        <textarea
                            placeholder={"enter description"}
                            value={description}
                            onChange={this.onDescriptionChange}
                        />
                    </div>
                    <div>
                        <button type={"submit"}>Save Changes</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default BlogForm;