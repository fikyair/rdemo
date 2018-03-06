import React, { Component } from 'react';

export default class CommentInput extends Component{

    static propTypes = {
        onSubmit:React.PropTypes.func,
        username: React.PropTypes.any,
        onUserNameInputBlur: React.PropTypes.func
    }

    static defaultProps = {
        username: ''
    }
    constructor (props){
        super(props)
        this.state = {
            username: props.username,
            content: '',
        }
    }
    componentDidMount () {
        this.textarea.focus()
    }


    handleUsernameBlur(event){
        if(this.props.onUserNameInputBlur) {
            this.props.onUserNameInputBlur(event.target.value)
        }
    }

    handleUsernameChange (event) {
        this.setState({
            username: event.target.value
        })
    }

    handleContentChange (event) {
        this.setState({
            content: event.target.value
        })
    }

    handleSubmit () {
        debugger
        if (this.props.onSubmit) {
            this.props.onSubmit({
                username: this.state.username,
                content: this.state.content,
                createdTime: +new Date()
            })
        }
        this.setState({ content: '' })
    }
    render(){
        return(
            <div className='comment-input'>
                    <div className='comment-field'>
                        <span className='comment-field-name'>用户名：</span>
                        <div className='comment-field-input'>
                            <input value={this.state.username}
                                   onChange={this.handleUsernameChange.bind(this)} //监听用户名输入框失去焦点的事件 onBlur：
                                   onBlur={this.handleUsernameBlur.bind(this)}
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
