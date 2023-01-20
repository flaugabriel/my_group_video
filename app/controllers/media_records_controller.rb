class MediaRecordsController < ApplicationController
  before_action :set_media_record, only: [:show, :update, :destroy]

  # GET /media_records
  def index
    @media_records = MediaRecord.all

    render json: @media_records
  end

  # GET /media_records/1
  def show
    render json: @media_record
  end

  # POST /media_records
  def create
    @media_record = MediaRecord.new(media_record_params)

    if @media_record.save
      render json: @media_record, status: :created, location: @media_record
    else
      render json: @media_record.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /media_records/1
  def update
    if @media_record.update(media_record_params)
      render json: @media_record
    else
      render json: @media_record.errors, status: :unprocessable_entity
    end
  end

  # DELETE /media_records/1
  def destroy
    @media_record.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_media_record
      @media_record = MediaRecord.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def media_record_params
      params.require(:media_record).permit(:code, :title, :description, :user_id)
    end
end
