import React, { Component } from 'react';

class CommentInput extends Component{

    static propTypes = {
        onSubmit:React.PropTypes.func
    }
    constructor (){
        super()
        this.state = {
            username: '',
            content: '',
        }
    }
    componentDidMount () {
        this.textarea.focus()
    }
    handleUsernameChange (event) {
        this.setState({
            username:event.target.value,
        })
    }

    handleContentChange (event) {
        this.setState({
            content: event.target.value,//没写这个的话是非受控组件
        })
    }
    handleSubmit () {
        if(this.props.onSubmit) {
            const { username , content} = this.state;
            this.props.onSubmit({username, content})  //将数据放入props
        }
        this.setState({content: ''});
    }
    render(){
        return(
            <div className='comment-input'>
                    <div className='comment-field'>
                        <span className='comment-field-name'>用户名：</span>
                        <div className='comment-field-input'>
                            <input value={this.state.username}
                                   onChange={this.handleUsernameChange.bind(this)}
                            />
                        </div>
                    </div>
                <div className='comment-field'>
                    <span className='comment-field-name'>评论内容：</span>
                    <div className='comment-field-input'>
                        <textarea
                            ref={(textarea) => this.textarea = textarea}
                            value={this.state.content}
                                  onChange={this.handleContentChange.bind(this)}/>
                    </div>
                </div>
                <div className='comment-field-button'>
                    <button onClick={this.handleSubmit.bind(this)}>发布</button>
                </div>
            </div>
        )
    }

}

export default CommentInput;